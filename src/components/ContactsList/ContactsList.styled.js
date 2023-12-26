import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 20px;
`;

export const StyledListItem = styled.li`
  font-size: 14px;
`;

export const StyledText = styled.p`
  display: inline;
  padding-right: 5px;
  margin: 0;
  font-weight: 500;
`;

export const StyledButton = styled.button`
  font-size: 10px;

  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;

  &:focus {
    color: white;
    background-color: rgb(65, 87, 233);
  }
`;
