import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PublicRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.WelcomePage} />
  );
}

export default PublicRoute;
