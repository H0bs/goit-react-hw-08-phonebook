import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6379eed07419b414df963f8d.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
  try {
    const responce = await axios.get("/contacts");
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  });

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ( {name, phone} , thunkAPI) => {
    try {
      const responce = await axios.post("/contacts", {name, phone});
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)