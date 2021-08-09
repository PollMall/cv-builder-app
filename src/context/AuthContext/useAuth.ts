import { useReducer } from 'react';
import { User } from '../../types';

export enum AuthActions {
  UPDATE_USER = 'UPDATE_USER',
  GET_SESSION_STARTED = 'GET_SESSION_STARTED',
}

export type State = {
  user?: User;
  loading: boolean;
};

export type Action = {
  payload?: any;
  type: AuthActions;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AuthActions.UPDATE_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case AuthActions.GET_SESSION_STARTED:
      return {
        ...state,
        loading: true,
      };
  }
};

const initialState: State = {
  user: undefined,
  loading: true,
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export { useAuth };
