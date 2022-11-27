import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilterContacts } from 'redux/selectors';
import { List, ListItem, DeleteButton, Text } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <List>
      {filterContacts.map(({ id, name, phone}) => (
        <ListItem key={id}>
          <Text>{name} - {phone}</Text>
          <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete Contact
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  )
}

