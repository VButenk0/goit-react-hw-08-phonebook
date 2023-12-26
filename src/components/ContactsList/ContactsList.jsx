import React, { useEffect } from 'react';
import {
  StyledButton,
  StyledList,
  StyledListItem,
  StyledText,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from '../../redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const getFilteredData = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredData();

  return (
    <StyledList>
      {filteredContacts.map(({ name, number, id }) => (
        <StyledListItem key={id}>
          <StyledText>
            {name}: {number}
          </StyledText>
          <StyledButton onClick={() => dispatch(deleteContactThunk(id))}>
            Delete
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
