import './style.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React from 'react';

export const Header = () => (
  <div data-testid="header">
    <Helmet>
      <link rel="preconnect" href="ttps://i8rmpiaad2.execute-api.us-east-1.amazonaws.com" />
    </Helmet>
    <header>
      <Link data-testid='link-randomsong' to="/randomsong">
        <h1>Random song</h1>
      </Link>
      <Link  data-testid='link-home' to="/">
        <h5> Lista de artistas</h5>
      </Link>
    </header>
  </div>
);
