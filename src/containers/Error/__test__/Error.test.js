/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import ErrorPage from '..';

it('error rendered correctly', () => {
  render( 
    <Router>
      <ErrorPage />
    </Router>,
  );

  const ErrorPageEl = screen.getByTitle('ErrorPage');
  expect(ErrorPageEl).toBeVisible();
});