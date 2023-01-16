import './style.css';
import { toMinutesAndSeconds } from '../../utils/helpers/toMinuteAndSeconds';
import { Helmet } from 'react-helmet';
import { Loader } from '../../components/Loader';
import { RandomSongData } from './RandomSongData';
import { Text } from "@nextui-org/react";

export const RandomSong = () => {
  const { randomSongsOfAlbum, albumSuggestion, isLoading, randomAlbum, album, isError, error } = RandomSongData()
  return (
    <>
      <Helmet>
        <title>{`Random song - ${randomSongsOfAlbum?.name}`} </title>
        <link rel="icon" type="image/svg+xml" href={randomAlbum?.image} />
      </Helmet>
      {isError && (<Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold">
        {error} </Text>)}
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="RandomSong__reproduction">
            <div className="RandomSong__reproduction__pic">
              <img src={randomAlbum?.image} alt={randomAlbum?.name} />
            </div>
            <div className="RandomSong__reproduction__info">
              <h3>{randomSongsOfAlbum?.name}</h3>
              <div>
                <p> Album: {randomAlbum?.name}</p>
                <p> {randomAlbum?.total_tracks} canciones </p>
              </div>
            </div>
          </div>
          <div className="RandomSong__reproduction__info__secondary">
            <div className="RandomSong__reproduction__main">
              <h3>Canciones</h3>
              <ol className="RandomSong__reproduction__main__section">
                {album?.songs.map((song: any) => {
                  return (
                    <li key={song.id}>
                      <strong> {song.name} </strong>
                      <p> {toMinutesAndSeconds(song.duration_ms)} </p>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="RandomSong__reproduction__main">
              <h3>Sugerencias</h3>
              <ol className="RandomSong__reproduction__main__section">
                {albumSuggestion?.songs.map((SongSuggestion: any) => {
                  return (
                    <li key={SongSuggestion.id}>
                      <strong> {SongSuggestion.name} </strong>
                      <p> {toMinutesAndSeconds(SongSuggestion.duration_ms)} </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
