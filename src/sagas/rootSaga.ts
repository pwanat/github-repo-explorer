import { all, fork } from 'redux-saga/effects';
import GithubSaga from './githubSaga';

export default function* rootSaga() {
  yield all([fork(GithubSaga)]);
}
