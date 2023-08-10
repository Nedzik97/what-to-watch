import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getUserData, loadFilms, requireAuthorization } from './action';
import { INITIAL_GENRE } from '../utils';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/films';

type InitialState = {
  selectedGenre: string;
  films: Films;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  userData: string;
}

const initialState: InitialState = {
  selectedGenre: INITIAL_GENRE,
  films: [],
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});
