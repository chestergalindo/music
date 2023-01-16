import { useQuery } from 'react-query';
import { callApi } from '../services/api/callApi';

export const getAlbumsData = () => {
  const { isLoading , data: artistInfo, isError, error } = useQuery(
    'repoData',
    () => callApi('artists'),
  );
  return { isLoading, artistInfo, isError, error };
}

export const getAlbumsByArtist = (idArtist: number) => {
  const { data: albumsData, isLoading, isError, error } = useQuery('albumsData', () => callApi(`artists/${idArtist}/albums`));
  return {albumsData, isLoading, isError, error};
}

export const getRandomSong = (idAlbum: number) => {
  const { data: albumsDataByArtist, isLoading, isError, error } = useQuery('randomAlbum', () => callApi(`albums/${idAlbum}/songs`));
  return{ albumsDataByArtist, isLoading, isError, error };
}