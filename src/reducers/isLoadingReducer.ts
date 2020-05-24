export interface IsLoadingState {
  loader: {
    [key: string]: boolean;
  };
  userRepoRequested?: string | null;
}

interface IsLoadingAction {
  type: string;
  login: string | null;
}

const getLoadingMatches = (actionType: string) =>
  /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

const isLoadingReducer = (state: IsLoadingState = { loader: {} }, action: IsLoadingAction) => {
  const matches = getLoadingMatches(action.type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    loader: {
      ...state.loader,
      [requestName]: requestStatus === 'REQUEST',
    },
    userRepoRequested: requestStatus === 'REQUEST' ? action.login : null
  };
};

export default isLoadingReducer;
