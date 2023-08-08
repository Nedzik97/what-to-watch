import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/types';

export const changeGenre = createAction<Genre>('changeGenre');
