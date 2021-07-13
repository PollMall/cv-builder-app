import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

interface AuthRouteProps {
  component: FC;
  path: string;
  to: string;
}

const AuthRoute = ({ component: C, path, to }: AuthRouteProps) => {
  const { isAuthenticated } = useContext(UserContext);

  return <Route path={path} render={(props) => (isAuthenticated ? <Redirect to={to} {...props} /> : <C />)} />;
};

export default AuthRoute;
