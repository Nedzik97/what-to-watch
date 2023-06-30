import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


const filmInfo = {
  filmTitle: 'Титаник',
  genre: 'мелодрама',
  movieReleaseDate: 2002
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmTitle={filmInfo.filmTitle} genre={filmInfo.genre} movieReleaseDate={filmInfo.movieReleaseDate}/>
  </React.StrictMode>,
);
