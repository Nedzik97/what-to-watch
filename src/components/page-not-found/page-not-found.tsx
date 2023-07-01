import {Link} from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => (
  <div className="not_found_container">
    <h1 className="NotFoundTitle">Page Not Found</h1>
    <p className="NotFoundText">Oops! The page you are looking for does not exist.</p>
    <Link className="NotFoundLink" to="/">Go to main page</Link>
  </div>
);
