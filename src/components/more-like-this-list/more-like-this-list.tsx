import { MovieCard } from '../movie-card/movie-card';
import { Film } from '../../types/films';

type MoreLikeThisListProps = {
  films: Film[];
  selectedGenre: string;
}

export const MoreLikeThisList = ({ films, selectedGenre }: MoreLikeThisListProps) => {
  const filteredMovies = films.filter((film) => film.genre === selectedGenre);

  const renderMovies = filteredMovies.slice(0, 4);
  return (
    <>
      {renderMovies.map((film) => (<MovieCard film={film} key={film.id}/>))}
    </>
  );
};

