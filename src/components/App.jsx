
import AddContactForm from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title, ContactsTitle } from './App.styled';
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phone book</Title>
      <AddContactForm/>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && !error && <p>Loading contacts...</p>}
      <ContactList/>
      
    </Container>
  )
}

export default App;