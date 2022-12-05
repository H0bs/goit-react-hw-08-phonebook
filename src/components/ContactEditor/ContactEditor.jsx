import { useDispatch } from "react-redux"
import { addContact } from "redux/contacts/operations";

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currenttarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (name !== '' & number !== '') {
      dispatch(addContact({ name, number }));
      form.reset();
      return;
    }
    alert('Contact cannot be empty.');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input number="number" />
      <button type="submit" >
        Add contact
      </button>
    </form>
  )
}