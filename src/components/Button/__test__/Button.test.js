/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Button from '..';

it('button rendered correctly', () => {
  render( 
    <Router>
      <Button
        text="Details"
        color="#EDEDED"
        fontColor="#171717"
        onClick={() => null}
      />
    </Router>,
  );

  const ButtonEl = screen.getByTitle('Button');
  expect(ButtonEl).toBeVisible();
});