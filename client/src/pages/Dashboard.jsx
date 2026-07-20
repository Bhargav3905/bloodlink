import useAuth from '../hooks/useAuth';

import DashboardLayout from '../layouts/DashboardLayout';

import DashboardOverview from '../features/analytics/pages/DashboardOverview';
import DonorDashboard from '../features/dashboard/pages/DonorDashboard';
import HospitalDashboard from '../features/dashboard/pages/HospitalDashboard';
import PatientDashboard from '../features/dashboard/pages/PatientDashboard';

import { ROLES } from '../constants/roles';

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case ROLES.ADMIN:
        return <DashboardOverview />;

      case ROLES.DONOR:
        return <DonorDashboard />;

      case ROLES.HOSPITAL:
        return <HospitalDashboard />;

      case ROLES.PATIENT:
        return <PatientDashboard />;

      default:
        return null;
    }
  };

  return <DashboardLayout>{renderDashboard()}</DashboardLayout>;
};

export default Dashboard;
