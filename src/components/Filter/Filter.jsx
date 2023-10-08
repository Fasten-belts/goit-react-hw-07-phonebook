import { selectFilter } from 'redux/selectors';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contactsFilter = e => dispatch(filterContacts(e.target.value.trim()));

  return (
    <FilterWrapper>
      <h2>Contacts</h2>
      <FilterLabel>Find Contacts By Name</FilterLabel>
      <FilterInput type="text" value={filter} onChange={contactsFilter} />
    </FilterWrapper>
  );
};
