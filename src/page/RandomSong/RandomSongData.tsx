import { useContext } from 'react';
import { useQuery } from 'react-query';
import { callApi } from '../../utils/callApi';
import keyBy from 'lodash/keyBy';
import { ContextMenu } from '../../hooks/context';
import { useRandomId } from '../../hooks/useRandomId';

export const RandomSongData = () => {
  const { artistInformation } = useContext(ContextMenu);

  const artistBasicInfo = keyBy(artistInformation, 'id');

  const { idx: idArtist } = useRandomId(Object.keys(artistBasicInfo)?.length);
  const { data: albumsData } = useQuery('albumsData', () => callApi(`artists/${idArtist}/albums`));
  const albumsByArtist = keyBy(albumsData, 'artist');

  const { idx: idAlbum } = useRandomId(Object.keys(albumsByArtist)?.length);
  const allSongsOfAlbum = albumsByArtist[idAlbum];
  const songsByAlbum = keyBy(allSongsOfAlbum?.albums, 'id');

  const { idx: idSong } = useRandomId(Object.keys(songsByAlbum).length);
  const { idx: idSongSuggestion } = useRandomId(Object.keys(songsByAlbum).length);

  const randomAlbum = songsByAlbum[+Object.keys(songsByAlbum)[0] + idSong];
  const randomAlbumSuggestion = songsByAlbum[+Object.keys(songsByAlbum)[0] + idSongSuggestion];

  const { data: albumsDataByArtist, isLoading } = useQuery('album', () =>
    callApi(`albums/${randomAlbum?.id}/songs`),
  );
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
  }
}