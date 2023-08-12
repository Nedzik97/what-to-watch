export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type Genre = string;
export type Films = Film[];

export type FilmReview = {
  id: number;
  comment: string;
  rating: number;
}

export type FavoriteFilm = {
  filmId: number;
  status: number;
}


