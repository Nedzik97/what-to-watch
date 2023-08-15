import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';

type PrivateRouteProps = {
  isAuthorized: boolean;
  children: JSX.Element;
}
export const PrivateRoute = ({ isAuthorized, children }:PrivateRouteProps): JSX.Element => (
  isAuthorized ? children : <Navigate to={AppRoute.SignIn}/>
);
