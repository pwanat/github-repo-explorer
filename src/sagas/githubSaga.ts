import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { fetchUsers, fetchRepositories } from '../services/githubServices';
import * as actionCreators from '../actionCreators/githubActionCreators';
import * as actionTypes from '../actionTypes/githubActionTypes';

function* onLoadUsers({ username }: actionTypes.GetUsersAction) {
  try {
    yield put(actionCreators.getUsersRequest());
    const { data } = yield call(fetchUsers, username);
    const userData = data.items.map(item => ({ id: item.id, login: item.login, repositories: null }));
    yield put(actionCreators.getUsersSuccess(userData));
  } catch (error) {
    console.log(error, 'error');
    yield put(actionCreators.getUsersFailure(error.response.data.error));
  }
}

function* onLoadRepositories({ login }: actionTypes.GetRepositoriesAction) {
  try {
    yield put(actionCreators.getRepositoriesRequest(login));
    const { data } = yield call(fetchRepositories, login);
    const repoData = data.map(item => ({ id: item.id, url: item.html_url, name: item.name, description: item.description, stars: item.stargazers_count }));
    yield put(actionCreators.getRepositoriesSuccess(login, repoData));
  } catch (error) {
    console.log(error, 'error');
    yield put(actionCreators.getUsersFailure(error.response.data.error));
  }
}

function* watchOnLoadUsers() {
  yield takeEvery(actionTypes.GET_USERS, onLoadUsers);
}

function* watchOnLoadRepositories() {
  yield takeEvery(actionTypes.GET_REPOSITORIES, onLoadRepositories);
}

export default function* githubSaga() {
  yield all([fork(watchOnLoadUsers)]);
  yield all([fork(watchOnLoadRepositories)]);
}
