import React, { createContext, ReactNode, useEffect, useState } from 'react';
import firebaseApp from '../firebaseConfig';
import firebase from 'firebase';

interface UserProviderProps {
  children: ReactNode;
  initialValue?: UserContextProps;
}

type UserContextProps = firebase.User & {
  isAuthenticated: boolean;
};

const UserContext = createContext({} as UserContextProps);

const defaultValue = {
  isAuthenticated: true,
} as UserContextProps;

const UserProvider = ({ children, initialValue }: UserProviderProps) => {
  const [value, setValue] = useState<UserContextProps>(initialValue || defaultValue);

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      const isAuthenticated = user ? true : false;
      setValue((prev) => ({ ...prev, isAuthenticated, ...user }));
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
