import './style.css';
import { Loader } from '../../components/Loader';
import type { IGridAlbums } from './index.d';
import React from 'react';

export const GridAlbums = (props: IGridAlbums) => {
  return props.isLoading ? (
    <Loader />
  ) : (
    <ul className="GridAlbums" data-testid="grid-albums">{props.data?.map(props.renderItem)}</ul>
  );
};
