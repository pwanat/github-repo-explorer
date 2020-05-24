import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../reducers/rootReducer';
import * as actionTypes from '../../actionTypes/githubActionTypes';
import { getRepositories } from '../../actionCreators/githubActionCreators';
import GithubUserComponent from './GithubUserComponent';

const mapStateToProps = (state: AppState) => {
  return {
    isLoadingUser: state.isLoading.userRepoRequested,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.GithubAction>) => ({
  onSearch: (login: string) => {
    dispatch(getRepositories(login));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubUserComponent);
