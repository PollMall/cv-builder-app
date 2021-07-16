import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

interface PrivateRouteProps {
  component: FC;
  path: string;
  to: string;
}

const PrivateRoute = ({ component: C, path, to }: PrivateRouteProps) => {
  const { state } = useContext(AuthContext);

  return <Route path={path} render={(props) => (state.user ? <C /> : <Redirect to={to} {...props} />)} />;
};

export default PrivateRoute;
