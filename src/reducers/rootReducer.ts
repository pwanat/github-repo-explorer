import { combineReducers } from 'redux';
import githubReducer from './githubReducer';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  github: githubReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
