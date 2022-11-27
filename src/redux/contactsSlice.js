import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    getFilteredContacts(state, action) {
      state.filter = action.payload;
    }
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id)
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions("pending")), (state) => {
        state.contacts.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions("fulfilled")), (state) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
});

export const { getFilteredContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;