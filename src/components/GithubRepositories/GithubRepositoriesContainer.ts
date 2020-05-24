import { connect } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import * as actionTypes from '../../actionTypes/githubActionTypes';
import GithubRepositoriesComponent from './GithubRepositoriesComponent';

const mapStateToProps = (state: AppState) => {
  return {
    isLoading: state.isLoading.loader[actionTypes.GET_REPOSITORIES],
    isLoadingUser: state.isLoading.userRepoRequested,
    error: state.error[actionTypes.GET_REPOSITORIES]
  };
};
export default connect(
  mapStateToProps,
  null
)(GithubRepositoriesComponent);
