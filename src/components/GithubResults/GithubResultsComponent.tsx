import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { User } from '../../interfaces/User';
import GithubUserComponent from '../GithubUser/GithubUserContainer';
import Spinner from '../../common/Spinner';

interface Props {
  username: string;
  users: Array<User>;
  isLoading: boolean;
  error: Error | string;
}

const ResultsWrapper = styled.div`
  margin: 1rem 0;
`;

const ResultsDescription = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const GithubResultsComponent: FunctionComponent<Props> = props => {
  const { username, users, isLoading, error } = props;
  if (error) {
    console.log('error: ', error);
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  // Return results
  if ( username && users.length > 0) {
    return (
      <ResultsWrapper>
        <ResultsDescription>
          Showing users for "{username}"
        </ResultsDescription>
        <div>
          {users.map(user => (<GithubUserComponent key={user.id} user={user} />))}
        </div>
      </ResultsWrapper>
    );
  }

  // Return not found
  if (username && users.length === 0) {
    return (
      <div>
        '{username}' not found on Github.
      </div>
    );
  }

  return(<></>);

};

export default GithubResultsComponent;
