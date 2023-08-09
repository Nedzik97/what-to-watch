import { useState } from 'react';
import { Film } from '../../types/films';
import { MoviePlayer } from '../../pages/movie-player/movie-player';

type MovieCardProps = {
  film: Film;
}

export const MovieCard = ({ film }: MovieCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='small-film-card__wrapper' onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (<MoviePlayer videoSrc={film.previewVideoLink} posterSrc={film.posterImage} isHovered={isHovered} />) : (
        <article className="small-film-card catalog__films-card" key={film.id} >
          <div className="small-film-card__image">
            <img src={film.posterImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">{film.name}</a>
          </h3>
        </article>
      )}
    </div>
  );
};
