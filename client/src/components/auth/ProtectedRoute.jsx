import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import useAuth from '../../hooks/useAuth';

import PageLoader from '../feedback/loader/PageLoader';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
