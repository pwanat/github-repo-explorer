import React, { FunctionComponent, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 1rem;
  padding: 0 1rem;
  color: #333;
  border: 1px solid #e9e9e9;
  background-color: #f2f2f2;
  margin-bottom: 15px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #555;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  font-size: 1rem;
  color: #fff;
  border: 0;
  font-weight: 300;
  border-radius: 1px;
  ${props =>
    props.disabled
      ? css`background: #ccc;`
      : css`background: #2c9cdb;`
  // eslint-disable-next-line @typescript-eslint/indent
  };
`;

interface Props {
  onSearch(username: string): void;
  isLoading: boolean;
}



const GithubSearchComponent: FunctionComponent<Props> = props => {
  const { onSearch, isLoading } = props;
  const [username, setUsername] = useState('');

  return (
    <Wrapper>
      <StyledInput
        value={username}
        placeholder="Enter username"
        onChange={e => setUsername(e.target.value)}
      />
      <StyledButton
        type="button"
        disabled={!username.trim() || isLoading}
        onClick={() => {
          onSearch(username);
        }}
      >
        Search
      </StyledButton>
    </Wrapper>
  );
};

export default GithubSearchComponent;
