import React from 'react';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthRoute from './AuthRoute';
import Mock from './__mocks__/Mock';
import { UserProvider } from '../../context/UserContext';

const renderApp = (isAuthenticated: boolean) =>
  render(
    <UserProvider initialValue={{ isAuthenticated }}>
      <Router initialEntries={['/path']}>
        <Switch>
          <AuthRoute component={Mock} path="/path" to="/redirect" />
        </Switch>
      </Router>
    </UserProvider>,
  );

describe('AuthRoute tests', () => {
  it('should render component', () => {
    renderApp(false);
    expect(screen.getByText(/mock/i)).toBeInTheDocument();
  });

  it('should redirect', () => {
    renderApp(true);
    expect(screen.queryByText(/mock/i)).not.toBeInTheDocument();
  });
});
