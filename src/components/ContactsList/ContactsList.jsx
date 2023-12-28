import React, { useEffect } from 'react';
import { StyledList } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from '../../redux/contacts/operations';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <List>
        {filteredContacts.map(({ name, number, id }) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteContactThunk(id))}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText>
              {name}: {number}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </StyledList>
    // <StyledList>
    //   {filteredContacts.map(({ name, number, id }) => (
    //     <StyledListItem key={id}>
    //       <StyledText>
    //         {name}: {number}
    //       </StyledText>
    //       <StyledButton onClick={() => dispatch(deleteContactThunk(id))}>
    //         Delete
    //       </StyledButton>
    //     </StyledListItem>
    //   ))}
    // </StyledList>
  );
};
