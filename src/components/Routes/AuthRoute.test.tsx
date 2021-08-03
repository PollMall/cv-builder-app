import React from 'react';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthRoute from './AuthRoute';
import Mock from './__mocks__/Mock';
import { AuthContext } from '../../context/AuthContext';
import firebase from 'firebase/app';

const renderApp = (user: firebase.auth.UserCredential | undefined) =>
  render(
    <AuthContext.Provider value={{ state: { loading: false, user }, dispatch: jest.fn() }}>
      <Router initialEntries={['/path']}>
        <Switch>
          <AuthRoute component={Mock} path="/path" to="/redirect" />
        </Switch>
      </Router>
    </AuthContext.Provider>,
  );

describe('AuthRoute tests', () => {
  it('should render component', () => {
    renderApp(undefined);
    expect(screen.getByText(/mock/i)).toBeInTheDocument();
  });

  it('should redirect', () => {
    renderApp({} as firebase.auth.UserCredential);
    expect(screen.queryByText(/mock/i)).not.toBeInTheDocument();
  });
});
