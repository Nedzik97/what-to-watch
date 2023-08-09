import { MovieCard } from '../movie-card/movie-card';
import { Film } from '../../types/films';

 type Props = {
  displayedMovies: Film[];
}

export const MoviesSuggestList = ({ displayedMovies }: Props): JSX.Element => (
  <div className="catalog__films-list">
    {displayedMovies.map((film) => (<MovieCard film={film} key={film.id} />
    ))}
  </div>
);

