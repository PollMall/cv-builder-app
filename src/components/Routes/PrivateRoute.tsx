import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

interface PrivateRouteProps {
  component: FC;
  path: string;
  to: string;
}

const PrivateRoute = ({ component: C, path, to }: PrivateRouteProps) => {
  const { isAuthenticated } = useContext(UserContext);

  return <Route path={path} render={(props) => (isAuthenticated ? <C /> : <Redirect to={to} {...props} />)} />;
};

export default PrivateRoute;
