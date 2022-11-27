import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Form, FormLabel, FormInput, InputButton } from './ContactForm.styled';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase())
    )
      return alert(`${name} is already in contacts.`);

    dispatch(addContact({name, phone}));
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setPhone('');
  }

  return (
    <>
        <Form onSubmit={handleSubmit}>
          <FormLabel> Name
            <FormInput
              type="text"
              name="name"
            value={name}
            onChange={handleInputChange}
              placeholder="Oleksandr Veremchuk"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>Phone number
            <FormInput
              type="tel"
              name="phone"
            value={phone}
            onChange={handleInputChange}
              placeholder="555-55-55"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <InputButton type="submit">Add contact</InputButton>
        </Form>
      </>
  )
}

export default AddContactForm;