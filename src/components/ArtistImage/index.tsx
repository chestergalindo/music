import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import type { IArtistImage } from './index.d';
import { validateProps } from './validateProps';  

export const ArtistImage = (props: IArtistImage) => {
  validateProps(props);
  return (
  <div className="imageContainer">
    {props.name ? (
      <Link data-testid="linkArtist" to={`/artist/${props.id}`}>
        <div
          style={{
            borderRadius: props.isCircle ? '50%' : '',
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: props.isCircle ? '#000' : '',
          }}
          className="imageContainer__image"
          data-testid='imgArtist'
        />
        <p className="imageContainer__text">{props.name}</p>
      </Link>
    ) : (
      <></>
    )}
  </div>
)};
