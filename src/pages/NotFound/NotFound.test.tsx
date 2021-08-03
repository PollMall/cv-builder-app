import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithAuthProvider as render } from '../../setupTests';
import userEvent from '@testing-library/user-event';
import NotFound from './NotFound';
import { useHistory } from 'react-router';
import { User } from '../../context/AuthContext/types';

jest.mock('react-router', () => {
  const push = jest.fn().mockImplementation();

  return {
    ...jest.requireActual('react-router'),
    useHistory: () => ({
      push,
    }),
  };
});

describe('NotFound tests', () => {
  const context = {
    state: { loading: false, user: {} as User },
    dispatch: jest.fn(),
  };

  it('should be rendered', () => {
    render(<NotFound />, context);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('should redirect', () => {
    const spy = jest.spyOn(useHistory(), 'push');
    render(<NotFound />, context);
    userEvent.click(screen.getByText(/go back/i));
    expect(spy).toHaveBeenCalledWith('/');
  });
});
