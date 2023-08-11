import { FilmCard } from '../film-card/film-card';
import { useMainPageSelector } from '../../hooks';


export const FilmsSimilarList = () => {
  const { listFilmsSimilar } = useMainPageSelector((state) => state);

  const renderedSimilarFilms = listFilmsSimilar.slice(0, 4);
  return (
    <>
      {renderedSimilarFilms.map((film) => (<FilmCard film={film} key={film.id}/>))}
    </>
  );
};

