/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '..';

it('navbar rendered correctly', () => {
  render( 
    <Router>
      <Navbar />
    </Router>,
  );

  const NavbarEl = screen.getByTitle('Navbar');
  expect(NavbarEl).toBeVisible();
});