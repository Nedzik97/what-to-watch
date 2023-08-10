import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { UserBlock } from '../../components/user-block/user-block';
import { MovieCard } from '../../components/movie-card/movie-card';
import { useMainPageSelector } from '../../hooks';

export const FilmsListToWatch = () => {
  const { listFilmsToWatch } = useMainPageSelector((state) => state);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          {listFilmsToWatch.map((film) => (<MovieCard film={film} key={film.id} />
          ))}

        </div>
      </section>

      <Footer/>

    </div>
  );
};
