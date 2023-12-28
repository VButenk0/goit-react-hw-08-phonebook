import { useDispatch, useSelector } from 'react-redux';
import { StyledForm } from './Form.styled';
import { useState } from 'react';
import { addContactThunk } from '../../redux/contacts/operations';
import { Button, TextField } from '@mui/material';

export const Form = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContactData = { name, number };

    if (contacts.some(contact => contact.name === newContactData.name)) {
      setName('');
      setNumber('');
      return alert(`${name} is already in contacts.`);
    } else if (
      contacts.some(contact => contact.number === newContactData.number)
    ) {
      setName('');
      setNumber('');
      return alert(`This number (${number}) is already in contacts.`);
    }
    dispatch(addContactThunk(newContactData));
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        onChange={handleChangeName}
        label="Fullname"
        helperText="Type new contact full name (Name Surname)"
        variant="outlined"
        value={name}
        color="secondary"
      />
      <TextField
        onChange={handleChangeNumber}
        label="Number"
        helperText="Type new contact number (111-111-1111)"
        variant="outlined"
        type="tel"
        value={number}
        color="secondary"
      />
      <Button type="submit" variant="outlined" color="secondary">
        Add contact
      </Button>
    </StyledForm>
  );
};
