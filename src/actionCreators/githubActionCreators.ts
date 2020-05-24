import * as actions from '../actionTypes/githubActionTypes';
import { User } from '../interfaces/User';
import { Repository } from '../interfaces/Repository';

export function getUsers(
  username: string
): actions.GetUsersAction {
  return {
    type: actions.GET_USERS,
    username
  };
}

export function getUsersRequest(): actions.GetUsersRequestAction {
  return {
    type: actions.GET_USERS_REQUEST
  };
}

export function getUsersSuccess(
  users: Array<User>
): actions.GetUsersSuccessAction {
  return {
    type: actions.GET_USERS_SUCCESS,
    users
  };
}

export function getUsersFailure(
  error: Error | string
): actions.GetUsersFailureAction {
  return {
    type: actions.GET_USERS_FAILURE,
    error
  };
}

export function getRepositories(
  login: string,
): actions.GetRepositoriesAction {
  return {
    type: actions.GET_REPOSITORIES,
    login
  };
}

export function getRepositoriesRequest(
  login: string
): actions.GetRepositoriesRequestAction {
  return {
    type: actions.GET_REPOSITORIES_REQUEST,
    login
  };
}

export function getRepositoriesSuccess(
  login: string,
  repositories: Array<Repository>
): actions.GetRepositoriesSuccessAction {
  return {
    type: actions.GET_REPOSITORIES_SUCCESS,
    login,
    repositories
  };
}

export function getRepositoriesFailure(
  error: Error | string
): actions.GetRepositoriesFailureAction {
  return {
    type: actions.GET_REPOSITORIES_FAILURE,
    error
  };
}
