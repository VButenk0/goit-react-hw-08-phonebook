import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 5px 7px;

  &.active {
    color: white;
    background-color: #9c27b0;
    border-radius: 10px;
  }
`;
