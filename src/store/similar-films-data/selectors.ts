import { Films } from '../../types/films';
import { State } from '../../types/state';
import { ReducerName } from '../../utils/constants';

export const getSimilarFilms = (state:State): Films => state[ReducerName.SimilarFilms].similarFilms;
export const getSimilarFilmsStatus = (state:State): boolean => state[ReducerName.SimilarFilms].isSimilarFilmsLoading;
