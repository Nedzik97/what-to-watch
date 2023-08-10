import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useMainPageSelector } from '../../hooks';
import { useMainPageDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-action';

export const UserBlock = (): JSX.Element => {
  const { authorizationStatus, userData } = useMainPageSelector((state) => state);
  const dispatch = useMainPageDispatch();

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  // eslint-disable-next-line no-console
  console.log(authorizationStatus);
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={authorizationStatus === AuthorizationStatus.Auth && userData !== '' ? userData : 'img/avatar.jpg'} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <Link
            onClick={handleLogout}
            className="user-block__link"
            to={AppRoute.Root}
          >
          Sign out
          </Link>
          :
          <Link
            className="user-block__link"
            to={AppRoute.SignIn}
          > Sign in
          </Link>}
      </li>
    </ul>
  );
};
