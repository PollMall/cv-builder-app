import React, { ReactNode, createContext, Dispatch } from 'react';
import { useAuth, State, Action } from './useAuth';

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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
