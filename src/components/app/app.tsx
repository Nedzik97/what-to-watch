import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { SignIn } from '../../pages/sign-in/sign-in';
import { MovieList } from '../../pages/movie-list/movie-list';
import { MoviePage } from '../../pages/movie-page/movie-page';
import { AddReviews } from '../add-reviews/add-reviews';
import { MoviePlayer } from '../../pages/movie-player/movie-player';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../page-not-found/page-not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import { MoviePageDetails } from '../movie-page-details/movie-page-details';
import { MoviewPageReviews } from '../movie-page-reviews/moview-page-reviews';
import { Movie } from '../../types/types';

type AppProps = {
    movies: Movie[];
  }

const App = ({ movies }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage movies={movies}/>} />
      <Route path={AppRoute.SignIn} element={<SignIn/>} />
      <Route path={AppRoute.MyList} element= {
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <MovieList/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Film} element={<MoviePage overview={<MoviePageOverview/>} details={<MoviePageDetails/>} reviews={<MoviewPageReviews/>} movies={movies}/>} />
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
  </BrowserRouter>
);
export default App;
