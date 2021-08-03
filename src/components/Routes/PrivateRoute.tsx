import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';

interface PrivateRouteProps {
  component: FC;
  path: string;
  to: string;
}

const PrivateRoute = ({ component: C, path, to }: PrivateRouteProps) => {
  const { state } = useContext(AuthContext);

  return (
    <Route
      path={path}
      render={(props) => (state.loading ? <LoadingPage /> : state.user ? <C /> : <Redirect to={to} {...props} />)}
    />
  );
};

export default PrivateRoute;
