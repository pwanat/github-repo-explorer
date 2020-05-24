import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Repository } from '../../interfaces/Repository';
import GithubRepositoryComponent from '../GithubRepository/GithubRepositoryComponent';
import Spinner from '../../common/Spinner';

const RepositoriesWrapper = styled.div`
  width: auto;
  min-height: 30px;
  height: auto;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.5rem 0 0.5rem 1rem;
`;

const NoRepositoriesFound = styled.div`
  width: auto;
  min-height: 30px;
  height: auto;
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem 1rem;
  display: flex;
  align-items: center;
`;

interface Props {
  login: string;
  repositories: Array<Repository> | null;
  isLoading: boolean;
  isLoadingUser: string | null;
  error: Error | string;
}

const GithubRepositoriesComponent: FunctionComponent<Props> = props => {
  const { login, repositories, isLoading, isLoadingUser, error } = props;

  if (error) {
    console.log('error: ', error);
    return <div>{error}</div>;
  }

  if (isLoading && isLoadingUser === login) {
    return <Spinner />;
  }

  // Return results
  if (repositories && repositories.length > 0) {
    return (
      <RepositoriesWrapper>
        {repositories.map(repo =>
          (<GithubRepositoryComponent key={repo.id} repo={repo} />))}
      </RepositoriesWrapper>
    );
  }

  // Return not found
  if (repositories && repositories.length === 0) {
    return (
      <NoRepositoriesFound>
        No repositories found.
      </NoRepositoriesFound>
    );
  }

  return (<></>);

};

export default GithubRepositoriesComponent;
