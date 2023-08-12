export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  AddReview = '/films/:id/review',
  Players = '/player',
  Player = '/player/:id',
  Film = '/films/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Films = '/films',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo'
}

export const getFormatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const day = date.getDate();
  const time = date.toLocaleTimeString();

  return `${year}-${day < 10 ? 0 + day : day} ${time}`;
};

export function getRatingResult(rating: number | undefined) {
  if (typeof rating === 'undefined') {
    return 'Invalid rating';
  }
  switch (true) {
    case (rating >= 0 && rating < 3):
      return 'Bad';
    case (rating >= 3 && rating < 5):
      return 'Normal';
    case (rating >= 5 && rating < 8):
      return 'Good';
    case (rating >= 8 && rating < 10):
      return 'Very good';
    case (rating === 10):
      return 'Awesome';
    default:
      return 'Invalid rating';
  }
}

export const ApiError = {
  Films: 'Failed to load films',
  PromoFilm: 'Failed to load promo film',
  Film: 'Failed to load film data',
  Favorite: 'Failed to load favorite films',
  PostFavorite: 'Failed to change favorite status',
  Reviews: 'Failed to load reviews',
  PostReview: 'Failed to post review',
  SimilarFilms: 'Failed to load similar films ',
  Login: 'Failed to login',
  Logout: 'Failed to logout',
  Unauthorized: 'You\'re not logged in. Some features are not available'
} as const;
