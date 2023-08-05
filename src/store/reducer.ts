import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './action';
import { INITIAL_GENRE } from '../utils';

const initialState = {
  selectedGenre: INITIAL_GENRE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
    });
});
