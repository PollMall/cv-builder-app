// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React, { ReactElement } from 'react';
import { AuthContext, Context } from './context/AuthContext';
import { render } from '@testing-library/react';

const renderWithAuthProvider = (ui: ReactElement, context: Context) =>
  render(<AuthContext.Provider value={context}>{ui}</AuthContext.Provider>);

export { renderWithAuthProvider };
