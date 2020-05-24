import { connect } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import * as actionTypes from '../../actionTypes/githubActionTypes';
import GithubResultsComponent from './GithubResultsComponent';

const mapStateToProps = (state: AppState) => {
  return {
    username: state.github.username,
    users: state.github.users,
    isLoading: state.isLoading.loader[actionTypes.GET_USERS],
    error: state.error[actionTypes.GET_USERS]
  };
};

export default connect(
  mapStateToProps,
  null
)(GithubResultsComponent);
