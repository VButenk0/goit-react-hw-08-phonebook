import React from 'react';
import { StyledUserContainer } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../../redux/auth/authOperations';
import { selectEmail } from '../../../redux/auth/authSelectors';

const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  return (
    <StyledUserContainer>
      <p>{email}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Logout
      </button>
    </StyledUserContainer>
  );
};

export default UserMenu;
