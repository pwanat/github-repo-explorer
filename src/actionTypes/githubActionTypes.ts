import { User } from '../interfaces/User';
import { Repository } from '../interfaces/Repository';

export const GET_USERS = 'githubActionTypes/GET_USERS';
export interface GetUsersAction {
  type: typeof GET_USERS;
  username: string;
}

export const GET_USERS_REQUEST = 'githubActionTypes/GET_USERS_REQUEST';
export interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}

export const GET_USERS_SUCCESS = 'githubActionTypes/GET_USERS_SUCCESS';
export interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  users: Array<User>;
}

export const GET_USERS_FAILURE = 'githubActionTypes/GET_USERS_FAILURE';
export interface GetUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
  error: Error | string;
}

export const GET_REPOSITORIES = 'githubActionTypes/GET_REPOSITORIES';
export interface GetRepositoriesAction {
  type: typeof GET_REPOSITORIES;
  login: string;
}

export const GET_REPOSITORIES_REQUEST = 'githubActionTypes/GET_REPOSITORIES_REQUEST';
export interface GetRepositoriesRequestAction {
  type: typeof GET_REPOSITORIES_REQUEST;
  login: string;
}

export const GET_REPOSITORIES_SUCCESS = 'githubActionTypes/GET_REPOSITORIES_SUCCESS';
export interface GetRepositoriesSuccessAction {
  type: typeof GET_REPOSITORIES_SUCCESS;
  login: string;
  repositories: Array<Repository>;
}

export const GET_REPOSITORIES_FAILURE = 'githubActionTypes/GET_REPOSITORIES_FAILURE';
export interface GetRepositoriesFailureAction {
  type: typeof GET_REPOSITORIES_FAILURE;
  error: Error | string;
}

export type GithubAction =
  | GetUsersAction
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailureAction
  | GetRepositoriesAction
  | GetRepositoriesRequestAction
  | GetRepositoriesSuccessAction
  | GetRepositoriesFailureAction;
