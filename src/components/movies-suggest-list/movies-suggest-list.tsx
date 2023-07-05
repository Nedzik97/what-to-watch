import { Movie } from '../../types/types';

type FilmsCardProps = {
  movies: Movie[];
}

const MovieSuggest = ({movies}: FilmsCardProps): JSX.Element => (
  <>
    {movies.map((movie) => (
      <article className="small-film-card catalog__films-card" key={movie.id} >
        <div className="small-film-card__image">
          <img src={movie.poster} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{movie.title}</a>
        </h3>
      </article>
    )
    )}
  </>
);

export const MoviesSuggestList = ({movies}: FilmsCardProps): JSX.Element => (
  <MovieSuggest movies={movies}/>
);
