import { store } from '../store/index';
import { Film, Films, Genre } from './films';
import { Reviews } from './review';
import { UserData, UserAuthStatus } from './user-auth-data';

export type State = ReturnType <typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FavoriteFilmsState = {
  films: Films;
  isFavoriteFilmsLoading: boolean;
};

export type FilmState = {
  film: Film |null;
  isFilmLoading:boolean;
  hasError: boolean;
};

export type FilmsState = {
  genre: Genre;
  films: Films;
  isFilmsLoading: boolean;
};

export type PromoFilmState = {
  promoFilm: Film|null;
  isPromoFilmLoading: boolean;
}

export type ReviewsState ={
  reviews: Reviews;
  isReviewsLoading: boolean;
  isReviewPosting: boolean;
}

export type SimilarFilmsState = {
  similarFilms: Films;
  isSimilarFilmsLoading:boolean;
}

export type UserState = {
  authStatus: UserAuthStatus;
  userData: UserData | null;
 };
