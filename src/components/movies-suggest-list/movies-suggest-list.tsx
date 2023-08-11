import { FilmCard } from '../film-card/film-card';
import { Film } from '../../types/films';

 type Props = {
  displayedMovies: Film[];
}

export const MoviesSuggestList = ({ displayedMovies }: Props): JSX.Element => (
  <div className="catalog__films-list">
    {displayedMovies.map((film) => (<FilmCard film={film} key={film.id} />
    ))}
  </div>
);

