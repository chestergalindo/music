import { useContext } from 'react';
import keyBy from 'lodash/keyBy';
import { ContextMenu } from '../../storage/context';
import { useRandomId } from '../../containers/hooks/useRandomId';
import { getAlbumsByArtist, getRandomSong } from '../../services/albums';

const albumsArtist = (artistBasicInfo: object) => {
  const { idx: idArtist } = useRandomId(Object.keys(artistBasicInfo)?.length);
  const { albumsData } = getAlbumsByArtist(idArtist);
  const albumsByArtist = keyBy(albumsData, 'artist');
  return albumsByArtist;
}

export const RandomSongData = () => {
  const { artistInformation } = useContext(ContextMenu);

  const albumsByArtist = albumsArtist(keyBy(artistInformation, 'id'));

  const { idx: idAlbum } = useRandomId(Object.keys(albumsByArtist)?.length);
  const allSongsOfAlbum = albumsByArtist[idAlbum];
  const songsByAlbum = keyBy(allSongsOfAlbum?.albums, 'id');

  const { idx: idSong } = useRandomId(Object.keys(songsByAlbum).length);
  const { idx: idSongSuggestion } = useRandomId(Object.keys(songsByAlbum).length);

  const randomAlbum = songsByAlbum[+Object.keys(songsByAlbum)[0] + idSong];
  const randomAlbumSuggestion = songsByAlbum[+Object.keys(songsByAlbum)[0] + idSongSuggestion];

  const { albumsDataByArtist, isLoading, isError, error } = getRandomSong(randomAlbum?.id);

  const albums = keyBy(albumsDataByArtist, 'album');
  const album = albums[randomAlbum?.id >= 300 ? 300 : randomAlbum?.id];

  const { idx: idRandomSong } = useRandomId(album?.songs.length);
  const randomSongsOfAlbum = album?.songs[idRandomSong];

  const albumSuggestion =
    albums[randomAlbumSuggestion?.id >= 300 ? 300 : randomAlbumSuggestion?.id];
  
  return{
    randomSongsOfAlbum,
    albumSuggestion,
    isLoading,
    randomAlbum,
    album,
    isError,
    error
  }
}