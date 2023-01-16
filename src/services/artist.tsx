import { useQuery } from 'react-query';
import { callApi } from '../services/api/callApi';

export const getArtistsData = () => {
  const { isLoading: isLoadingArtistInformation, data: artistInformation, isError, error } = useQuery(
    'repoData',
    () => callApi('artists'),
  );
  return { isLoadingArtistInformation, artistInformation, isError, error };
}