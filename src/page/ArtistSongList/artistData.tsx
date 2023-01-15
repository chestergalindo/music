import { useContext } from 'react';
import { useQuery } from 'react-query';
import keyBy from 'lodash/keyBy';
import { useParams } from 'react-router-dom';
import { ContextMenu } from '../../hooks/context';
import { callApi } from '../../utils/callApi';

export const artistState = () =>{
  const { idArtist = 0 } = useParams();
  const { artistInformation } = useContext(ContextMenu);

  const { data: artistInfo, isLoading } = useQuery('albums', () =>
    callApi(`artists/${idArtist}/albums`),
  );
  const groupedByAlbum = keyBy(artistInfo, 'artist');
  const artistBasicInfo = keyBy(artistInformation, 'id');

  const albumList = groupedByAlbum[+idArtist]?.albums;
  const artistData = artistBasicInfo[+idArtist];

  return { albumList, artistData, isLoading };
}