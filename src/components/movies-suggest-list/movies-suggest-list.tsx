import { MovieCard } from '../movie-card/movie-card';
import { Movie } from '../../types/types';

type MoviesSuggestListProps = {
  movies: Movie[];
}

export const MoviesSuggestList = ({ movies }: MoviesSuggestListProps): JSX.Element => (
  <>
    {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} /> )
    )}
  </>
);

