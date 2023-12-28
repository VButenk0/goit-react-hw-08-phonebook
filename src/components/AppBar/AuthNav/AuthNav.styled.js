import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAuthNav = styled.div`
  display: flex;
  justify-content: flex-end;
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
