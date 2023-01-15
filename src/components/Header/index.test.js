/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('should render the component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  it('should render the correct link to home', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('link-home')).toHaveAttribute('href', '/');
  });
  it('should render the correct link to random song', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('link-randomsong')).toHaveAttribute('href', '/randomsong');
  });
})