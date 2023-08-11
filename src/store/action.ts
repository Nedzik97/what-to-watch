import { createAction } from '@reduxjs/toolkit';
import { Genre, Films, Film } from '../types/films';
import { AuthorizationStatus } from '../const';
import { Comments } from '../types/comments';

export const changeGenre = createAction<Genre>('changeGenre');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadFilmsToWatch = createAction<Films>('data/loadFilmsToWatch');
export const loadFilmPreview = createAction<Film>('data/loadFilmPreview');
export const loadFilmPromo = createAction<Film>('data/loadFilmPromo');
export const loadFilmsSimilar = createAction<Films>('data/loadFilmsSimilar');
export const loadCommentsList = createAction<Comments>('data/loadCommentsList');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<string>('redirectToRoute');

export const getUserData = createAction<string>('user/getUserData');


