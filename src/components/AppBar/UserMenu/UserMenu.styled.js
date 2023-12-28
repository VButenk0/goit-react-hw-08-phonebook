const { default: styled } = require('styled-components');

export const StyledUserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  button {
    height: 30px;
    background-color: transparent;
    border: 1px solid #533566;
    border-radius: 10px;
    &:hover {
      color: white;
      background-color: #ef4343;
      border: 1px solid white;
    }
  }
`;
