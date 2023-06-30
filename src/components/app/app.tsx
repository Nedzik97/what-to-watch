import { Main } from '../main/main';

export type AppScreenProps = {
  filmTitle: string;
  genre: string;
  movieReleaseDate: number;
}

const App = ({filmTitle, genre, movieReleaseDate}: AppScreenProps): JSX.Element =>
  <Main filmTitle={filmTitle} genre={genre} movieReleaseDate={movieReleaseDate}/>;
export default App;
