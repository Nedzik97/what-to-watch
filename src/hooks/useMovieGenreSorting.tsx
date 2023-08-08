import { useState } from 'react';
import { useMainPageSelector } from '../store/index';
import { movies } from '../mocks/films';
import { INITIAL_GENRE, MOVIES_PER_PAGE } from '../utils';

export const useMovieGenreSorting = () => {
  const [displayedMoviesCount, setDisplayedMoviesCount] = useState(MOVIES_PER_PAGE);

  const { selectedGenre } = useMainPageSelector((state) => state);
  const sortedMovies = selectedGenre === INITIAL_GENRE ? movies : movies.filter((movie) => movie.genre === selectedGenre);

  const handleShowMore = () => {
    setDisplayedMoviesCount((prevCount) => prevCount + MOVIES_PER_PAGE);
  };

  const resetCounter = () => {
    setDisplayedMoviesCount(MOVIES_PER_PAGE);
  };


  return { selectedGenre, handleShowMore, sortedMovies, displayedMoviesCount, resetCounter };
};

