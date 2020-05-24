import * as actions from '../actionTypes/githubActionTypes';
import { User } from '../interfaces/User';


export interface GithubState {
  github: string;
  username: string;
  users: Array<User>
}

const initialState: GithubState = {
  github: '',
  username: '',
  users: [],
};

export default function githubReducer(
  state: GithubState = initialState,
  action: actions.GithubAction
): GithubState {
  switch (action.type) {
    case actions.GET_USERS:
      return {
        ...state,
        username: action.username
      };
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    case actions.GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        users: state.users.map((item, index) => {
          if (item.login !== action.login) {
            return item;
          }
          return {
            ...item,
            repositories: action.repositories
          };
        })
      };
    default:
      return state;
  }
}
