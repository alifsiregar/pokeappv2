/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Modal from '..';

it('Loading Overlay rendered correctly', () => {
  render( 
    <Router>
      <Modal type="type-1" onClick={() => null} />
      <Modal type="type-2" onClick={() => null} />
    </Router>,
  );

  const ModalType1El = screen.getByTitle('ModalType1');
  const ModalType2El = screen.getByTitle('ModalType2');
  expect(ModalType1El).toBeVisible();
  expect(ModalType2El).toBeVisible();
});