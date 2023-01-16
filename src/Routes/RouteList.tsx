import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArtistList } from '../views/ArtistList';
import { ArtistSongList } from '../views/ArtistSongList';
import { RandomSong } from '../views/RandomSong';
import { Header } from '../components/Header';
import { NotFound } from '../views/NotFound';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="artist">
          <Route path=":idArtist" element={<ArtistSongList />} />
        </Route>
        <Route path="randomsong" element={<RandomSong />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};
