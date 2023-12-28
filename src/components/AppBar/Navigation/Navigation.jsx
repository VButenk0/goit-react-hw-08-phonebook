import React from 'react';
import { StyledNavLink, StyledNavigation } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavLink to={'/'}>Home</StyledNavLink>
      <StyledNavLink to={'/contacts'}>Contacts</StyledNavLink>
    </StyledNavigation>
  );
};

export default Navigation;
