/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import LoadingOverlay from '..';

it('Loading Overlay rendered correctly', () => {
  render( 
    <Router>
      <LoadingOverlay />
    </Router>,
  );

  const LoadingOverlayEl = screen.getByTitle('LoadingOverlay');
  expect(LoadingOverlayEl).toBeVisible();
});