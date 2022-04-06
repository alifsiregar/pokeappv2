/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Layout from '..';

it('layout rendered correctly', () => {
  render( 
    <Router>
      <Layout />
    </Router>,
  );

  const LayoutEl = screen.getByTitle('Layout');
  expect(LayoutEl).toBeVisible();
});