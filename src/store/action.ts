import { createAction } from '@reduxjs/toolkit';
import { Genre, Films, Film } from '../types/films';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeGenre = createAction<Genre>('changeGenre');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadFilmsToWatch = createAction<Films>('data/loadFilmsToWatch');
export const loadFilmPreview = createAction<Film>('data/loadFilmPreview');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const getUserData = createAction<string>('user/getUserData');


