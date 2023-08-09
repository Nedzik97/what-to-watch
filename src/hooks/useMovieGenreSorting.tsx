import { useState } from 'react';
import { INITIAL_GENRE, MOVIES_PER_PAGE } from '../utils';
import { useMainPageSelector } from './index';

export const useMovieGenreSorting = () => {
  const [displayedMoviesCount, setDisplayedMoviesCount] = useState(MOVIES_PER_PAGE);
  const { films, selectedGenre } = useMainPageSelector((state) => state);

  const sortedMovies = selectedGenre === INITIAL_GENRE ? films : films.filter((movie) => movie.genre === selectedGenre);

  const handleShowMore = () => {
    setDisplayedMoviesCount((prevCount) => prevCount + MOVIES_PER_PAGE);
  };

  const resetCounter = () => {
    setDisplayedMoviesCount(MOVIES_PER_PAGE);
  };

  return { selectedGenre, handleShowMore, sortedMovies, displayedMoviesCount, resetCounter };
};

