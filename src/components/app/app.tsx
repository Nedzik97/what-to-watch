import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../main-page/main-page';
import { SignIn } from '../sign-in/sign-in';
import { MovieList } from '../movie-list/movie-list';
import { MoviePage } from '../movie-page/movie-page';
import { AddReviews } from '../add-reviews/add-reviews';
import { MoviePlayer } from '../movie-player/movie-player';
import { PrivateRoute } from '../private-route/private-route';
import { NotFoundPage } from '../page-not-found/page-not-found';
import { AppRoute, AuthorizationStatus} from '../../const';

export type AppScreenProps = {
  filmTitle: string;
  genre: string;
  movieReleaseDate: number;
}

const App = ({filmTitle, genre, movieReleaseDate}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage filmTitle={filmTitle} genre={genre} movieReleaseDate={movieReleaseDate}/>} />
      <Route path={AppRoute.SignIn} element={<SignIn/>} />
      <Route path={AppRoute.MyList} element= {
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <MovieList/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Film} element={<MoviePage/>} />
      <Route path={AppRoute.AddReview} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <AddReviews/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Player} element={<MoviePlayer/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </BrowserRouter>
);


export default App;
