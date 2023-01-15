import { useState } from 'react';
import keyBy from 'lodash/keyBy';
import { useQuery } from 'react-query';
import { callApi } from '../../utils/callApi';
import { useRandomId } from '../../hooks/useRandomId';

export const PlaySongData = (props) => {
  const [isOpenListSongs, setIsOpenListSongs] = useState(false);
  const { data } = useQuery('songs', () => callApi(`albums/${props.id}/songs`));

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
  };
}