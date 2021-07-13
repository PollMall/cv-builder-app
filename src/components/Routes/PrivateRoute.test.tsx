import React from 'react';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PrivateRoute from './PrivateRoute';
import Mock from './__mocks__/Mock';
import { UserProvider } from '../../context/UserContext';

const renderApp = (isAuthenticated: boolean) =>
  render(
    <UserProvider initialValue={{ isAuthenticated }}>
      <Router initialEntries={['/path']}>
        <Switch>
          <PrivateRoute component={Mock} path="/path" to="/redirect" />
        </Switch>
      </Router>
    </UserProvider>,
  );

describe('PrivateRoute tests', () => {
  it('should render component', () => {
    renderApp(true);
    expect(screen.getByText(/mock/i)).toBeInTheDocument();
  });

  it('should redirect', () => {
    renderApp(false);
    expect(screen.queryByText(/mock/i)).not.toBeInTheDocument();
  });
});
