import { useContext } from 'react';
import keyBy from 'lodash/keyBy';
import { useParams } from 'react-router-dom';
import { ContextMenu } from '../../storage/context';
import { getAlbumsByArtist } from '../../services/albums';
import type { IArtistImage } from '../../utils/types/IArtistImage.d';
import type { IAlbum } from '../../utils/types/IAlbums.d';

export const ArtistState = () =>{
  const { idArtist = 0 } = useParams();
  const { artistInformation } = useContext(ContextMenu);
  const { albumsData, isLoading, isError, error } = getAlbumsByArtist(Number(idArtist));

  const groupedByAlbum = keyBy(albumsData, 'artist');
  const artistBasicInfo = keyBy(artistInformation, 'id');

  const albumList: [IAlbum] = groupedByAlbum[+idArtist]?.albums;
  const validdationNumberOfTracks = albumList?.filter((album) => Number(album.total_tracks) > 0);
  const validationName = validdationNumberOfTracks?.filter((album) => album.name !== null);

  const validationHasnotSameName = () =>{
    const albumNames = validationName?.map((album) => album.name);
    const uniqueAlbumNames = [...new Set(albumNames)];
    return uniqueAlbumNames;
  }

  const albumListWithoutSameName = validationHasnotSameName()?.map((albumName) => {
    const album = validationName?.filter((album) => album.name === albumName);
    return album[0];
  });

  const artistData: IArtistImage = artistBasicInfo[+idArtist];

  return { albumListWithoutSameName, artistData, isLoading, isError, error  };
}