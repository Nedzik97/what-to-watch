import { Film } from '../../../types/films';
import { getRatingResult } from '../../../const';

type OverviewFilmProps = {
  filmPreview?: Film | null;
}

export const OverviewFilm = ({ filmPreview }:OverviewFilmProps): JSX.Element => (
  <div>
    <div className="film-rating">
      <div className="film-rating__score">{filmPreview?.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRatingResult(filmPreview?.rating)}</span>
        <span className="film-rating__count">{filmPreview?.scoresCount}</span>
      </p>
    </div>

    <div className="film-card__text">
      {filmPreview?.description}
      <p className="film-card__director"><strong>Director: {filmPreview?.director}</strong></p>

      <p className="film-card__starring"><strong>Starring: {filmPreview?.starring}</strong></p>
    </div>
  </div>
);
