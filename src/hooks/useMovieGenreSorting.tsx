import { useState } from 'react';
import { DEFAULT_GENRE, FILMS_AMOUNT } from '../utils/constants';
import { useMainPageSelector } from './index';

export const useMovieGenreSorting = () => {
  const [displayedMoviesCount, setDisplayedMoviesCount] = useState(FILMS_AMOUNT);
  const { films, selectedGenre } = useMainPageSelector((state) => state);

  const sortedMovies = selectedGenre === DEFAULT_GENRE ? films : films.filter((movie) => movie.genre === selectedGenre);

  const handleShowMore = () => {
    setDisplayedMoviesCount((prevCount) => prevCount + FILMS_AMOUNT);
  };

  const resetCounter = () => {
    setDisplayedMoviesCount(FILMS_AMOUNT);
  };

  return { selectedGenre, handleShowMore, sortedMovies, displayedMoviesCount, resetCounter };
};

