import { useEffect, useState } from 'react';

import adminService from '../services/admin.service';

import DashboardLayout from '../../../layouts/DashboardLayout';
import StatCard from '../../../components/dashboard/common/StatCard';

const AdminHome = () => {
  const [overview, setOverview] = useState(null);
  const [inventorySummary, setInventorySummary] = useState(null);
  const [requestStatistics, setRequestStatistics] = useState(null);
  const [donationStatistics, setDonationStatistics] = useState(null);
  const [lowStock, setLowStock] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [
          overviewResponse,
          inventoryResponse,
          requestResponse,
          donationResponse,
          lowStockResponse,
        ] = await Promise.all([
          adminService.getOverview(),
          adminService.getInventorySummary(),
          adminService.getRequestStatistics(),
          adminService.getDonationStatistics(),
          adminService.getLowStock(),
        ]);

        setOverview(overviewResponse.data);

        setInventorySummary(inventoryResponse.data);

        setRequestStatistics(requestResponse.data);

        setDonationStatistics(donationResponse.data);

        setLowStock(lowStockResponse.data);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout title="Admin Dashboard">
        <p>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Total Users" value={overview?.totalUsers || 0} />

        <StatCard title="Total Donors" value={overview?.totalDonors || 0} />

        <StatCard title="Total Patients" value={overview?.totalPatients || 0} />

        <StatCard title="Total Hospitals" value={overview?.totalHospitals || 0} />

        <StatCard title="Pending Approvals" value={overview?.pendingApprovals || 0} />

        <StatCard title="Completed Requests" value={overview?.completedRequests || 0} />

        <StatCard title="Inventory Units" value={inventorySummary?.totalUnits || 0} />

        <StatCard title="Total Donations" value={donationStatistics?.totalDonations || 0} />

        <StatCard title="Pending Requests" value={requestStatistics?.pending || 0} />

        <StatCard title="Rejected Requests" value={requestStatistics?.rejected || 0} />
      </div>

      <div className="mt-10 rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-bold">Low Stock Blood Groups</h2>

        {lowStock.length === 0 ? (
          <p>No Low Stock</p>
        ) : (
          <ul className="space-y-2">
            {lowStock.map((item) => (
              <li key={item.bloodGroup}>
                {item.bloodGroup} - {item.quantity} Units
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminHome;
