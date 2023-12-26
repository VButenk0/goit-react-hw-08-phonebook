import { useDispatch, useSelector } from 'react-redux';
import { StyledForm, StyledInput, StyledButton } from './Form.styled';
import { useState } from 'react';
import { addContactThunk } from '../../redux/operations';

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
      <label htmlFor="name">Name</label>
      <br />
      <StyledInput
        onChange={handleChangeName}
        id="name"
        type="text"
        name="name"
        value={name}
        placeholder="Type new contact full name (Name Surname)"
        pattern="^(\w\w+)\s(\w+)$"
        required
      />
      <br />
      <label htmlFor="number">Number</label>
      <br />
      <StyledInput
        onChange={handleChangeNumber}
        id="number"
        type="tel"
        name="number"
        value={number}
        placeholder="Type new contact number (111-111-1111)"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
      <br />
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
