import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('renders learn react link', () => {
    render(<App />);
    expect(screen.getByText(/landing page/i)).toBeInTheDocument();
  });
});
