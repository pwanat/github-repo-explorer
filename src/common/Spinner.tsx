import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  margin: 10px auto;
  display: block;
  width: 40px;
  height: 40px;
  &::after {
    content: " ";
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 4px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;


const Spinner: FunctionComponent = () => {
  return (
    <StyledSpinner />
  );
};


export default Spinner;
