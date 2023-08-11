export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  AddReview = '/films/:id/review',
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
