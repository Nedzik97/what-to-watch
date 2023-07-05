import { MovieCard } from '../movie-card/movie-card';
import { Movie } from '../../types/types';

type MoreLikeThisListProps = {
  movies: Movie[];
  selectedGenre: string;
}

export const MoreLikeThisList = ({ movies, selectedGenre }: MoreLikeThisListProps) => {
  const filteredMovies = movies.filter((movie) => movie.genre === selectedGenre);

  const renderMovies = filteredMovies.slice(0, 4);
  return (
    <>
      {renderMovies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
    </>
  );
};

