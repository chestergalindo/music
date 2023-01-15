/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArtistImage } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('ArtistImage', () => {
  it('should render without crashing', () => {
    //Given
    const name = 'new';
    const image = '../../assets/2.png';
    const id = 125;
    const alt = 'artistImage';
    const popularity = 154;

    //When
    const ArtistImageComponent = render(
      <ArtistImage isCircle id={id} name={name} image={image} alt={alt} popularity={popularity} />,
      { wrapper: MemoryRouter }
    );

    //then
    expect(ArtistImageComponent).toMatchInlineSnapshot(`
      {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="imageContainer"
            >
              <a
                data-testid="linkArtist"
                href="/artist/125"
              >
                <div
                  class="imageContainer__image"
                  data-testid="imgArtist"
                  style="border-radius: 50%; background-image: url(../../assets/2.png); background-size: cover; background-position: center; background-color: rgb(0, 0, 0);"
                />
                <p
                  class="imageContainer__text"
                >
                  new
                </p>
              </a>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="imageContainer"
          >
            <a
              data-testid="linkArtist"
              href="/artist/125"
            >
              <div
                class="imageContainer__image"
                data-testid="imgArtist"
                style="border-radius: 50%; background-image: url(../../assets/2.png); background-size: cover; background-position: center; background-color: rgb(0, 0, 0);"
              />
              <p
                class="imageContainer__text"
              >
                new
              </p>
            </a>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
  it('show name of link', () => {
    //Given
    const name = 'new';
    const image = '../../assets/2.png';
    const id = 125;
    const alt = 'artistImage';
    const popularity = 154;

    //When
    render(
      <ArtistImage isCircle id={id} name={name} image={image} alt={alt} popularity={popularity} />,
      { wrapper: MemoryRouter }
    );

    const ArtistImageComponent = screen.getByText(name);

    //then
    expect(ArtistImageComponent).toBeInTheDocument();
  });
  it('should have correct styles', () => {
    //Given
    const name = 'new';
    const image = '../../assets/2.png';
    const id = 125;
    const alt = 'artistImage';
    const popularity = 154;

    //When
    render(
      <ArtistImage isCircle id={id} name={name} image={image} alt={alt} popularity={popularity} />,
      { wrapper: MemoryRouter }
    );

    const ArtistImageComponent = screen.getByTestId('imgArtist');

    //then
    expect(ArtistImageComponent).toHaveStyle({
      borderRadius: '50%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgb(0, 0, 0)'
    });
  });
  it('should have correct link', () => {
    //Given
    const name = 'new';
    const image = '../../assets/2.png';
    const id = 125;
    const alt = 'artistImage';
    const popularity = 154;

    //When
    render(
      <ArtistImage isCircle id={id} name={name} image={image} alt={alt} popularity={popularity} />,
      { wrapper: MemoryRouter }
    );

    const ArtistImageComponent = screen.getByTestId('linkArtist');

    //then
    expect(ArtistImageComponent).toHaveAttribute('href', `/artist/${id}`);
  });
});
