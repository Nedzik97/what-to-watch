import { Film } from '../../types/films';
import { State } from '../../types/state';
import { ReducerName } from '../../utils/constants';

export const getPromoFilm = (state: State): Film|null => state[ReducerName.PromoFilm].promoFilm;
export const getPromoFilmStatus = (state: State): boolean => state[ReducerName.PromoFilm].isPromoFilmLoading;

