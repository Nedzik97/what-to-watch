import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { SignIn } from '../../pages/auth-screen/auth-screen';
import { FilmsListToWatch } from '../../pages/films-list-to-watch/films-list-to-watch';
import { FilmInfo } from '../../pages/film-info/film-info';
import { AddReviews } from '../add-reviews/add-reviews';
import { FilmPlayer } from '../../pages/film-player/film-player';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../page-not-found/page-not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { useMainPageSelector } from '../../hooks';
import { HistoryRouter } from '../history-router.tsx/history-route';
import { browserHistory } from '../../browser-history';


const App = (): JSX.Element => {
  const { isDataLoaded, authorizationStatus } = useMainPageSelector((state) => state);

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
          <FilmInfo />
        }
        />
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReviews/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={
          <FilmPlayer videoSrc={''} posterSrc={''} isHovered={false} />
        }
        />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
