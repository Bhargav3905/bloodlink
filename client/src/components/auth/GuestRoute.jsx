import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { PageLoader } from '../feedback/loader';

const GuestRoute = () => {
  const { loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  return <Outlet />;
};

export default GuestRoute;
