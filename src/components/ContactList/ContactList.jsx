import { useDispatch, useSelector } from 'react-redux';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ContactListWrapper>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactName>{name}:</ContactName>{' '}
          <ContactNumber>{number}</ContactNumber>
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
};
