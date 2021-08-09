import React, { ReactNode, createContext, Dispatch } from 'react';
import { User } from '../../types';
import { useAuth, State, Action, AuthActions } from './useAuth';

interface AuthProviderProps {
  children: ReactNode;
}

export type Context = {
  state: State;
  dispatch: Dispatch<Action>;
};

const AuthContext = createContext({} as Context);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const value = useAuth();
  const { dispatch } = value;

  React.useEffect(() => {
    dispatch({ type: AuthActions.GET_SESSION_STARTED });
    // get credentials from sessionStorage
    const data = sessionStorage.getItem('user');
    const user = data && (JSON.parse(data) as User);
    dispatch({ type: AuthActions.UPDATE_USER, payload: user });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
