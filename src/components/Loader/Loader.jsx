import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledLoader>
      <InfinitySpin width="200" color="#533566" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Loader;
