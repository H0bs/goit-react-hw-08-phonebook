import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { getFilteredContacts } from 'redux/contacts/contactsSlice';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(getFilteredContacts(e.target.value));
  }
  return (
    <label>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        placeholder="Find contact"
      />
    </label>
  )
}
