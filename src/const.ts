export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
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
  Logout = '/logout'
}

export const initialStateFilmPreview = {
  backgroundColor: '#B6A99F',
  backgroundImage: 'https://9.react.pages.academy/static/film/background/Fantastic_Beasts.jpg',
  description: 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
  director: 'David Yates',
  genre: 'Fantasy',
  id: 3,
  isFavorite: false,
  name: 'Fantastic Beasts: The Crimes of Grindelwald',
  posterImage: 'https://9.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
  previewImage: 'https://9.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  previewVideoLink: 'https://9.react.pages.academy/static/film/video/traffic.mp4',
  rating: 3.4,
  released: 2018,
  runTime: 134,
  scoresCount: 160757,
  starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
  videoLink: 'https://9.react.pages.academy/static/film/video/bubbles.mp4',
};
