import { useContext } from 'react';
import './style.css';
import { ArtistImage } from '../../components/ArtistImage';
import { GridAlbums } from '../../components/GridAlbums';
import { ContextMenu } from '../../storage/context';
import React from 'react';
import type { IArtistImage } from '../../utils/types/IArtistImage.d';

import { Helmet } from 'react-helmet';

export const ArtistList = () => {
  const { isLoadingArtistInformation, artistInformation } = useContext(ContextMenu);

  return (
    <section className="artistList">
      <Helmet>
        <title>Lista de Artistas</title>
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
      </Helmet>
      <div data-testid="ListArtistas" className="artistList__list">
        <GridAlbums
          isLoading={isLoadingArtistInformation}
          data={artistInformation}
          renderItem={(artist: IArtistImage) => (
            <div key={artist.id}>
              <ArtistImage
                isCircle
                id={artist.id}
                name={artist.name}
                image={artist.image}
                alt={artist.name}
                popularity={artist.popularity}
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};
