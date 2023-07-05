import {useState} from 'react';
import { Movie } from '../../types/types';
import { MoviePlayer } from '../../pages/movie-player/movie-player';

type MovieCardProps = {
  movie: Movie;
}

export const MovieCard = ({movie}: MovieCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='small-film-card__wrapper' onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (<MoviePlayer videoSrc={movie.previewVideo} posterSrc={movie.poster} isHovered={isHovered} />) : (
        <article className="small-film-card catalog__films-card" key={movie.id} >
          <div className="small-film-card__image">
            <img src={movie.poster} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">{movie.title}</a>
          </h3>
        </article>
      )}
    </div>
  );
};
