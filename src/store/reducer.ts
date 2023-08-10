import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getUserData, loadFilms, loadFilmsToWatch, requireAuthorization, loadFilmPreview } from './action';
import { INITIAL_GENRE } from '../utils';
import { AuthorizationStatus, initialStateFilmPreview } from '../const';
import { Films, Film } from '../types/films';

type InitialState = {
  selectedGenre: string;
  films: Films;
  listFilmsToWatch: Films;
  filmPreview: Film;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  userData: string;
}

const initialState: InitialState = {
  selectedGenre: INITIAL_GENRE,
  films: [],
  listFilmsToWatch: [],
  filmPreview: initialStateFilmPreview,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userData: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFilmsToWatch, (state, action) => {
      state.listFilmsToWatch = action.payload;
    })
    .addCase(loadFilmPreview, (state, action) => {
      state.filmPreview = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});
