/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { GridAlbums } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('GridAlbums', () => {
  it('should render the component', () => {
    //given
    const isLoading = false;
    const data = [
      {
        created_at: "1-january",
        genres: ["rock"],
        id: 154,
        image: '../../assets/2.png',
        name: 'validation',
        popularity: '154',
        spotify_id: '454654aa',
        spotify_url: 'http://spotify.com',
        updated_at: '1-january',
      }
    ]
    const renderItem=() => <a> tst </a>

    render(
      <MemoryRouter>
        <GridAlbums
          isLoading={isLoading}
          data={data}
          renderItem={renderItem}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId('grid-albums')).toBeInTheDocument();
  });
  // validate loader component when Loading is true
  it('should render the loader component', () => {
    //given
    const isLoading = true;
    const data = []
    const renderItem=() => <a> tst </a>

    render(
      <MemoryRouter>
        <GridAlbums
          isLoading={isLoading}
          data={data}
          renderItem={renderItem}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
})