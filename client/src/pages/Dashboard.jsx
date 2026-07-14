import { useAuth } from '../contexts/AuthContext';

import AdminHome from '../features/admin/components/AdminHome';
import PatientHome from '../features/patient/components/PatientHome';
import DonorHome from '../features/donor/components/DonorHome';
import HospitalHome from '../features/hospital/components/HospitalHome';

import { ROLES } from '../constants/roles';

const Dashboard = () => {
  const { user } = useAuth();

  switch (user?.role) {
    case ROLES.ADMIN:
      return <AdminHome />;

    case ROLES.DONOR:
      return <DonorHome />;

    case ROLES.HOSPITAL:
      return <HospitalHome />;

    default:
      return <PatientHome />;
  }
};

export default Dashboard;