import React, { createContext, ReactNode } from 'react';

interface UserProviderProps {
  children: ReactNode;
  initialValue?: UserContextProps;
}

type UserContextProps = {
  isAuthenticated: boolean;
};

const UserContext = createContext({} as UserContextProps);

const defaultValue = {
  isAuthenticated: true,
} as UserContextProps;

const UserProvider = ({ children, initialValue }: UserProviderProps) => {
  const value = initialValue || defaultValue;

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
