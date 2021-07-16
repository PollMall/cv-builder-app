import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LadingPage from './LandingPage';
import { useHistory } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn().mockImplementation(),
  }),
}));

describe('LandingPage tests', () => {
  it('should be rendered', () => {
    render(<LadingPage />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it('should go further in app', () => {
    const spy = jest.spyOn(useHistory(), 'push');
    render(<LadingPage />);
    userEvent.click(screen.getByText(/get started/i));
    expect(spy).toHaveBeenCalled();
  });
});
