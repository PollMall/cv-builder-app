import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithAuthProvider as render } from '../../setupTests';
import userEvent from '@testing-library/user-event';
import LadingPage from './LandingPage';
import { useHistory } from 'react-router-dom';
import { User } from '../../context/AuthContext/types';

jest.mock('react-router-dom', () => {
  const push = jest.fn().mockImplementation();

  return {
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push,
    }),
  };
});

describe('LandingPage tests', () => {
  const context = {
    state: { loading: false, user: {} as User },
    dispatch: jest.fn(),
  };

  it('should be rendered', () => {
    render(<LadingPage />, context);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it('should go further in app', () => {
    const spy = jest.spyOn(useHistory(), 'push');
    render(<LadingPage />, context);
    userEvent.click(screen.getByText(/get started/i));
    expect(spy).toHaveBeenCalled();
  });
});
