import React from 'react';
import ReactDOM from 'react-dom';
import GenreList from 'components/GenreList';

const dest = document.getElementById('content');

ReactDOM.render(
  <GenreList genresUrl="/api/genres.json" preferencesUrl="/api/preferences.json"/>,
  dest
);

window.React = React; // enable debugger
