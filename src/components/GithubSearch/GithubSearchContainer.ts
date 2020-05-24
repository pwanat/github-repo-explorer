import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../reducers/rootReducer';
import { getUsers } from '../../actionCreators/githubActionCreators';
import * as actionTypes from '../../actionTypes/githubActionTypes';
import GithubSearchComponent from './GithubSearchComponent';

const mapStateToProps = (state: AppState) => {
  return {
    isLoading: state.isLoading.loader[actionTypes.GET_USERS],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.GithubAction>) => ({
  onSearch: (username: string) => {
    dispatch(getUsers(username));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubSearchComponent);
