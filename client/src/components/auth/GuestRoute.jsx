import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import PageLoader from '../feedback/loader/PageLoader';

import { ROUTES } from '../../constants/routes';

const GuestRoute = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
