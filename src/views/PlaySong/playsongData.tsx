import { useState } from 'react';
import keyBy from 'lodash/keyBy';
import { getSongsData } from '../../services/songs';
import { useRandomId } from '../../containers/hooks/useRandomId';

export const PlaySongData = (props:{id:number}) => {
  const [isOpenListSongs, setIsOpenListSongs] = useState(false);
  const { data, isError, error } = getSongsData(props);
  
  const albums = keyBy(data, 'album');
  const songsOfAlbum = albums[props.id];
  const { idx, setIdx, setRandomId } = useRandomId(songsOfAlbum?.songs.length);

  return {
    isOpenListSongs,
    setIsOpenListSongs,
    songsOfAlbum,
    idx,
    setIdx,
    setRandomId,
    isError,
    error
  };
}