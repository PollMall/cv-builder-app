import React from 'react';
import { render, screen } from '@testing-library/react';
import LadingPage from './LandingPage';

describe('LandingPage tests', () => {
  it('should be rendered', () => {
    render(<LadingPage />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
