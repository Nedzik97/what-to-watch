import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { fetchFilmsListAction, checkAuthAction, fetchLoadFilmPromo } from './store/api-action';
import { fetchFavoriteFilms } from './store/favorite-film-data/api-action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsListAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoriteFilms());
store.dispatch(fetchLoadFilmPromo());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
);
