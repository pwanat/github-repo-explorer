import React, { FunctionComponent } from 'react';
import './style.css';
import styled from 'styled-components';
import GithubSearch from './components/GithubSearch/GithubSearchContainer';
import GithubResults from './components/GithubResults/GithubResultsContainer';

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 2em 1em;
  max-width: 400px;
  width: 100%;
`;

const App: FunctionComponent = props => {
  return (
    <Wrapper>
      <GithubSearch />
      <GithubResults username="" users={[]} isLoading={false} error="" />
    </Wrapper>
  );
};

export default App;
