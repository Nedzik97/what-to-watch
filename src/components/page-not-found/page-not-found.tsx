import { Link } from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => (
  <div className="not-found">
    <h1 className="not-found__title">Page Not Found</h1>
    <p className="not-found__text">Oops! The page you are looking for does not exist.</p>
    <Link className="not-found__link" to="/">Go to main page</Link>
  </div>
);
