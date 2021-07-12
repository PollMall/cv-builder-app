import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFound from './NotFound';
import { useHistory } from 'react-router';

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
  it('should be rendered', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('should redirect', () => {
    const spy = jest.spyOn(useHistory(), 'push');
    render(<NotFound />);
    userEvent.click(screen.getByText(/go back/i));
    expect(spy).toHaveBeenCalledWith('/');
  });
});
