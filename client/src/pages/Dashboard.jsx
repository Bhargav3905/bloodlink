import DashboardLayout from '../layouts/DashboardLayout';

import DashboardOverview from '../features/analytics/pages/DashboardOverview';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  );
};

export default Dashboard;