import { createContext } from 'react';
import { getArtistsData } from '../services/artist';
import { defaultValues } from '../utils/constants/defaultValues';

export const ContextMenu = createContext(defaultValues);

export const AppProvider = (props: { children: JSX.Element }) => {
  const { isLoadingArtistInformation, artistInformation } = getArtistsData();

  return (
    <ContextMenu.Provider value={{ isLoadingArtistInformation, artistInformation }}>
      {props.children}
    </ContextMenu.Provider>
  );
};
