import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getUserData, loadFilms, loadFilmsToWatch, requireAuthorization, loadFilmPreview, loadFilmPromo, loadFilmsSimilar, loadCommentsList } from './action';
import { INITIAL_GENRE } from '../utils';
import { AuthorizationStatus } from '../const';
import { Films, Film } from '../types/films';
import { Comments } from '../types/comments';

type InitialState = {
  selectedGenre: string;
  films: Films;
  listFilmsToWatch: Films;
  listFilmsSimilar: Films;
  filmPreview: Film | null;
  filmPromo: Film | null;
  commentsList: Comments;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  userData: string;
}

const initialState: InitialState = {
  selectedGenre: INITIAL_GENRE,
  films: [],
  listFilmsToWatch: [],
  listFilmsSimilar: [],
  filmPreview: null,
  filmPromo: null,
  commentsList: [],
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
    .addCase(loadFilmsSimilar, (state, action) => {
      state.listFilmsSimilar = action.payload;
    })
    .addCase(loadFilmPreview, (state, action) => {
      state.filmPreview = action.payload;
    })
    .addCase(loadFilmPromo, (state, action) => {
      state.filmPromo = action.payload;
    })
    .addCase(loadCommentsList, (state, action) => {
      state.commentsList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});
