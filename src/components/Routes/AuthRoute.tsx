import React, { FC, useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

interface AuthRouteProps extends RouteProps {
  component: FC;
  path: string;
  to: string;
}

const AuthRoute = ({ component: C, path, to }: AuthRouteProps) => {
  const { state } = useContext(AuthContext);

  return <Route path={path} render={(props) => (state.user ? <Redirect to={to} {...props} /> : <C />)} />;
};

export default AuthRoute;
