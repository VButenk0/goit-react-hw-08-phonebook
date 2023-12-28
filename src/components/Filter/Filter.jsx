import React from 'react';
import { StyledFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <StyledFilter>
      <TextField
        onChange={e => dispatch(changeFilter(e.target.value))}
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        color="secondary"
      />
    </StyledFilter>
  );
};
