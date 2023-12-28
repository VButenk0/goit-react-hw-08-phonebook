import React from 'react';
import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
};

const StyledAppBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-weight: 500;

  padding: 10px 20px;

  border-bottom: 2px solid #533566;

  &:not(:first-child) {
    display: flex;
    justify-content: flex-end;
  }
`;

export default AppBar;
