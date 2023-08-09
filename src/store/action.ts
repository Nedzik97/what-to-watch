import { createAction } from '@reduxjs/toolkit';
import { Genre, Films } from '../types/films';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeGenre = createAction<Genre>('changeGenre');

export const loadFilms = createAction<Films>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

