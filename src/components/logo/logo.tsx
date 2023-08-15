import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';

type LogoProps = {
  isLight?: boolean;
}

export const Logo = ({ isLight }:LogoProps):JSX.Element => (
  <div className="logo">
    <Link to={AppRoute.Main} className={`logo__link ${isLight ? 'logo__link--light' : ''}`}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);
