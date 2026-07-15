import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import { ROUTES } from '../../constants/routes';
import { ROLES } from '../../constants/roles';
import PageLoader from '../feedback/loader/PageLoader';

const RoleRoute = ({ allowedRoles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    switch (user.role) {
      case ROLES.ADMIN:
        return <Navigate to={ROUTES.ADMIN_DASHBOARD} replace />;

      case ROLES.HOSPITAL:
        return <Navigate to={ROUTES.HOSPITAL_DASHBOARD} replace />;

      case ROLES.DONOR:
        return <Navigate to={ROUTES.DONOR_DASHBOARD} replace />;

      default:
        return <Navigate to={ROUTES.PATIENT_DASHBOARD} replace />;
    }
  }

  return <Outlet />;
};

export default RoleRoute;
