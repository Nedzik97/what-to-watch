import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { SignIn } from '../../pages/auth-screen/auth-screen';
import { FilmsListToWatch } from '../../pages/films-list-to-watch/films-list-to-watch';
import { MoviePage } from '../../pages/movie-page/movie-page';
import { AddReviews } from '../add-reviews/add-reviews';
import { MoviePlayer } from '../../pages/movie-player/movie-player';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../page-not-found/page-not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import { MoviePageDetails } from '../movie-page-details/movie-page-details';
import { MoviewPageReviews } from '../movie-page-reviews/moview-page-reviews';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { useMainPageSelector } from '../../hooks';
import { HistoryRouter } from '../history-router.tsx/history-route';
import { browserHistory } from '../../browser-history';


const App = (): JSX.Element => {
  const { isDataLoaded, films, authorizationStatus } = useMainPageSelector((state) => state);

  if ( !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path={AppRoute.SignIn} element={<SignIn/>} />
        <Route path={AppRoute.MyList} element= {
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <FilmsListToWatch/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element= {
          <MoviePage overview={<MoviePageOverview/>} details={<MoviePageDetails/>} reviews={<MoviewPageReviews/>} films={films} />
        }
        />
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReviews/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={
          <MoviePlayer videoSrc={''} posterSrc={''} isHovered={false} />
        }
        />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </HistoryRouter>
  );
};


export default App;
