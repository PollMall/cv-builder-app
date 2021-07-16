import React from 'react';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PrivateRoute from './PrivateRoute';
import Mock from './__mocks__/Mock';
import { AuthContext } from '../../context/AuthContext';
import firebase from 'firebase/app';

const renderApp = (user: firebase.auth.UserCredential | undefined) =>
  render(
    <AuthContext.Provider value={{ state: { loading: false, user }, dispatch: jest.fn() }}>
      <Router initialEntries={['/path']}>
        <Switch>
          <PrivateRoute component={Mock} path="/path" to="/redirect" />
        </Switch>
      </Router>
    </AuthContext.Provider>,
  );

describe('PrivateRoute tests', () => {
  it('should render component', () => {
    renderApp({} as firebase.auth.UserCredential);
    expect(screen.getByText(/mock/i)).toBeInTheDocument();
  });

  it('should redirect', () => {
    renderApp(undefined);
    expect(screen.queryByText(/mock/i)).not.toBeInTheDocument();
  });
});
