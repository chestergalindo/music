import { useQuery } from 'react-query';
import { callApi } from '../services/api/callApi';

export const getSongsData = (props:{id:number}) => {
  const { data, isError, error } = useQuery('songs', () => callApi(`albums/${props.id}/songs`));
  return { data, isError, error };
}