import { MovieCard } from '../movie-card/movie-card';
import { Movie } from '../../types/types';

 type Props = {
  displayedMovies: Movie[];
}

export const MoviesSuggestList = ({ displayedMovies }: Props): JSX.Element => (
  <div className="catalog__films-list">
    {displayedMovies.map((movie) => (<MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);

