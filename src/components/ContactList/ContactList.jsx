import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { List, ListItem, DeleteButton, Text } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <List>
      {filterContacts.map(({ id, name, number}) => (
        <ListItem key={id}>
          <Text>{name} - {number}</Text>
          <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete Contact
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  )
}

