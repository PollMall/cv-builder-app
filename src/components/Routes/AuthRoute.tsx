import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

interface AuthRouteProps {
  component: FC;
  path: string;
  to: string;
}

const AuthRoute = ({ component: C, path, to }: AuthRouteProps) => {
  const { state } = useContext(AuthContext);

  return <Route path={path} render={(props) => (state.user ? <Redirect to={to} {...props} /> : <C />)} />;
};

export default AuthRoute;
