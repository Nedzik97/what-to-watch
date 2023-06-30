import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { AppScreenProps } from './components/app/app';


const filmInfo: AppScreenProps = {
  filmTitle: 'Титаник',
  genre: 'мелодрама',
  movieReleaseDate: 2002
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmInfo={filmInfo}/>
  </React.StrictMode>,
);
