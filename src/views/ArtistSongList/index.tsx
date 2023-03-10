import './style.css';
import { FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { ArtistImage } from '../../components/ArtistImage';
import { PlaySong } from '../PlaySong';
import { Loader } from '../../components/Loader';
import React from 'react';
import { ArtistState } from './artistData';
import type { IAlbum } from '../../utils/types/IAlbums.d';
import { Text } from "@nextui-org/react";

export const ArtistSongList = () => {
  const { albumListWithoutSameName, artistData, isLoading, isError, error } = ArtistState();

  return (
    <>
      <Helmet>
        <title>{artistData?.name}</title>
        <link rel="icon" type="image/svg+xml" href={artistData?.image} />
      </Helmet>
      {isError && (<Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold">
        {error} </Text>)}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="artistSongList__container">
            <ArtistImage
              image={artistData?.image}
              name={artistData?.name}
              isCircle
              id={0}
              alt={''}
              popularity={0}
            />
            <div className="artistSongList__text">
              <h3>{artistData?.name}</h3>
              <div>
                <FaStar className="artistSongList__star" />
              </div>
              <p>{artistData?.popularity}</p>
            </div>
          </section>
          <section className="artistSongList__albums">
            <div className="artistSongList__songs">
              <h3>Albumes</h3>
              {albumListWithoutSameName?.map((album: IAlbum) => (
                <div key={album.id} className="artistSongList__song__container">
                  <div className="artistSongList__song__content">
                    <img src={album.image} alt={album.name} className="artistSongList__song__img" />
                    <div>
                      <strong>{album?.name}</strong>
                      <p>canciones:{album?.total_tracks}</p>
                    </div>
                  </div>
                  <div className="artistSongList__song__button">
                    <PlaySong id={album?.id} image={album.image} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};
