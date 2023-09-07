import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../../types/films';

export const changeGenre = createAction('genre/changeGenre', (genre: Genre) => ( { payload: genre } ));
