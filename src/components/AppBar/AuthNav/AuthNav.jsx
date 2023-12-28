import React from 'react';
import { StyledAuthNav, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <StyledAuthNav>
      <StyledNavLink to={'/register'}>Sign Up</StyledNavLink>
      <StyledNavLink to={'/login'}>Login</StyledNavLink>
    </StyledAuthNav>
  );
};

export default AuthNav;
