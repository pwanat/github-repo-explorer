import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Repository } from '../../interfaces/Repository';
import StarIcon from '../../common/StarIcon';

const RepoWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background: #ccc;
  border-radius: 1px;
  min-height: 80px;
  cursor: pointer;
`;

const RepoHeader = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.4rem;
`;

const RepoTitle = styled.div`
  flex: 1;
  font-size: 1rem;
  font-weight: bold;
`;

const RepoStars = styled.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;

const RepoDescription = styled.div`
  font-size: 0.92rem;
  padding-right: 1rem;
`;

const StarCount = styled.span`
  margin-right: 5px;
`;

interface Props {
  repo: Repository;
}

const GithubRepositoryComponent: FunctionComponent<Props> = props => {
  const { url, name, description, stars } = props.repo;

  return (
    <RepoWrapper onClick={() => window.open(url, '_blank')}>
      <RepoHeader>
        <RepoTitle>{name}</RepoTitle>
        <RepoStars>
          <StarCount>{stars}</StarCount>
          <StarIcon />
        </RepoStars>
      </RepoHeader>
      <RepoDescription>{description}</RepoDescription>
    </RepoWrapper>
  );
};


export default GithubRepositoryComponent;
