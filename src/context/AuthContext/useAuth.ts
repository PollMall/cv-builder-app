import { useReducer } from 'react';
import firebase from 'firebase/app';

export enum AuthActions {
  AUTH_STARTED = 'AUTH_STARTED',
  AUTH_FAILED = 'AUTH_FAILED',
  UPDATE_USER = 'UPDATE_USER',
  CLEAR_STATE = 'CLEAR_STATE',
}

export type State = {
  user?: firebase.User;
  loading: boolean;
  error?: any;
};

export type Action = {
  payload?: any;
  type: AuthActions;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AuthActions.AUTH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case AuthActions.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AuthActions.UPDATE_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case AuthActions.CLEAR_STATE:
      return {
        ...state,
        loading: false,
        error: undefined,
      };
  }
};

const initialState: State = {
  user: undefined,
  loading: false,
  error: undefined,
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export { useAuth };
