import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { User } from '../../interfaces/User';
import GithubRepositoriesComponent from '../GithubRepositories/GithubRepositoriesContainer';

const UserWrapper = styled.div`
  width: 100%;
  min-height: 30px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background: #ddd;
  border-radius: 1px;
  cursor: pointer;
`;

const UserLogin = styled.div`
  flex: 1 0 auto;
`;

const UserArrow = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  transform: ${props => props.active ? 'rotate(45deg)' : 'rotate(-135deg)'};
  transition: all 0.3s ease-out;
`;

interface Props {
  user: User;
  onSearch(login: string): void;
  isLoadingUser?: string | null;
}

const GithubUserComponent: FunctionComponent<Props> = props => {
  const { onSearch, isLoadingUser } = props;
  const { login, repositories } = props.user;
  const [active, setActive] = useState(false);


  const handleClick = (): void => {
    if (isLoadingUser !== login && repositories == null) {
      onSearch(login);
    }
    setActive(!active);
  };

  return (
    <div>
      <UserWrapper onClick={() => { handleClick(); }}>
        <UserLogin>{login}</UserLogin>
        <UserArrow><Arrow active={active} /></UserArrow>
      </UserWrapper>
      {
        active &&
        <GithubRepositoriesComponent login={login} repositories={repositories} isLoading={false} isLoadingUser={null} error="" />
      }
    </div>
  );

};

export default GithubUserComponent;
