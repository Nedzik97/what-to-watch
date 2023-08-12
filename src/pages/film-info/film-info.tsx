import cx from 'classnames';
import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { AppRoute } from '../../const';
import { FilmsSimilarList } from '../../components/films-similar-list/films-similar-list';
import { DetailsFilm } from '../../components/extended-info-film/details-film/details-film';
import { OverviewFilm } from '../../components/extended-info-film/overview-film/overview-film';
import { ReviewFilm } from '../../components/extended-info-film/review-film/review-film';
import { UserBlock } from '../../components/user-block/user-block';
import { useState } from 'react';
import { useMainPageSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { store } from '../../store';


export const FilmInfo = (): JSX.Element => {
  const { filmPreview } = useMainPageSelector((state) => state);
  const [activeMoviewInfo, setActiveMoviewInfo] = useState('Overview');

  const toggleTab = ( linkName: string) => {
    setActiveMoviewInfo(linkName);
  };

  const transitionToAddReview = (evt: React.MouseEvent<HTMLAnchorElement>, id: number | undefined) => {
    evt.preventDefault();
    if (id !== undefined) {
      store.dispatch(redirectToRoute(`/films/${id}/review`));
    }
  };

  const transitionFilmPlayer = (evt: React.MouseEvent<HTMLAnchorElement>, id: number | undefined) => {
    evt.preventDefault();
    if (id !== undefined) {
      store.dispatch(redirectToRoute(`${AppRoute.Players}/${id}`));
    }
  };

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmPreview?.backgroundImage} alt={filmPreview?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo/>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPreview?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPreview?.genre}</span>
                <span className="film-card__year">{filmPreview?.released}</span>
              </p>

              <div className="film-card__buttons">
                <a className="btn btn--play film-card__button" href='*'onClick={(evt) => transitionFilmPlayer(evt, filmPreview?.id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </a>

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href='*'
                  onClick={(evt) => transitionToAddReview(evt, filmPreview?.id)}
                  className="btn film-card__button"
                >Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmPreview?.posterImage} alt={filmPreview?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={cx('film-nav__item', {
                    'film-nav__item--active' : activeMoviewInfo === 'Overview'
                  })}
                  >
                    <button type='button' className="film-nav__link" onClick={() => toggleTab('Overview')}>Overview</button>
                  </li>
                  <li className={cx('film-nav__item', {
                    'film-nav__item--active' : activeMoviewInfo === 'Details'
                  })}
                  >
                    <button type='button' className="film-nav__link" onClick={() => toggleTab('Details')}>Details</button>
                  </li>
                  <li className={cx('film-nav__item', {
                    'film-nav__item--active' : activeMoviewInfo === 'Reviews'
                  })}
                  >
                    <button type='button' className="film-nav__link"onClick={() => toggleTab('Reviews')}>Reviews</button>
                  </li>
                </ul>
              </nav>

              {activeMoviewInfo === 'Overview' && <OverviewFilm filmPreview={filmPreview}/>}
              {activeMoviewInfo === 'Details' && <DetailsFilm filmPreview={filmPreview}/>}
              {activeMoviewInfo === 'Reviews' && <ReviewFilm/>}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">

            <FilmsSimilarList />

          </div>
        </section>

        <Footer/>

      </div>
    </div>
  );
};
