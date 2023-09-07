import { Films } from '../../types/films';
import { SmallFilmCard } from '../small-film-card/small-film-card';

type FilmsListProps = {
  films:Films;
}

export const FilmsList = ({ films }: FilmsListProps): JSX.Element => (
  <div className="catalog__films-list">
    {films.map((film)=> <SmallFilmCard key = {film.id} film={film}/>) }
  </div>
);
