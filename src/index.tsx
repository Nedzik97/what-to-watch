import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { movies } from './mocks/films';

export const store = configureStore({ reducer });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App movies={movies} />
    </Provider>
  </React.StrictMode>,
);
