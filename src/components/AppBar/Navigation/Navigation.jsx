import React from 'react';
import { StyledNavLink, StyledNavigation } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <StyledNavigation>
      <StyledNavLink to={'/'}>Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to={'/contacts'}>Contacts</StyledNavLink>}
    </StyledNavigation>
  );
};

export default Navigation;
