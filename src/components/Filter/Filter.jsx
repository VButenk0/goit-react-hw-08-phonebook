import React from 'react';
import { StyledSearch } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <StyledSearch
        id="filter"
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};
