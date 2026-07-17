import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  Users,
  Heart,
  Building2,
  UserRound,
  ClipboardList,
  Activity,
  Droplets,
} from 'lucide-react';

import DashboardStatCard from '../../../components/dashboard/DashboardStatCard';

import analyticsService from '../services/analytics.service';

import SkeletonDashboard from '../../../components/feedback/skeleton/SkeletonDashboard';

import BloodDistributionChart from '../components/BloodDistributionChart';
import RequestStatisticsChart from '../components/RequestStatisticsChart';
import RecentDonations from '../components/RecentDonations';
import LowStockCard from '../components/LowStockCard';

import getApiError from '../../../utils/apiError';
import { ROUTES } from '../../../constants/routes';

const DashboardOverview = () => {
  const navigate = useNavigate();

  const [overview, setOverview] = useState(null);
  const [inventorySummary, setInventorySummary] = useState(null);
  const [bloodDistribution, setBloodDistribution] = useState([]);
  const [requestStatistics, setRequestStatistics] = useState({});
  const [donationStatistics, setDonationStatistics] = useState(null);
  const [lowStock, setLowStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  
  const fetchDashboard = async () => {
    try {
      setRefreshing(true);

      const [
        overviewResponse,
        inventoryResponse,
        distributionResponse,
        requestResponse,
        donationResponse,
        lowStockResponse,
      ] = await Promise.all([
        analyticsService.getOverview(),
        analyticsService.getInventorySummary(),
        analyticsService.getBloodDistribution(),
        analyticsService.getRequestStatistics(),
        analyticsService.getDonationStatistics(),
        analyticsService.getLowStock(),
      ]);
      
      setOverview(overviewResponse.data);
      setInventorySummary(inventoryResponse.data);
      setBloodDistribution(distributionResponse.data);
      setRequestStatistics(requestResponse.data);
      setDonationStatistics(donationResponse.data);
      setLowStock(lowStockResponse.data);

      toast.success('Latest dashboard data loaded');
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  
  useEffect(() => {
    void fetchDashboard();
  }, []);

  if (loading) {
    return <SkeletonDashboard />;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              🟢 System Healthy
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              Admin Dashboard
            </span>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Dashboard</h1>

          <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
            Welcome back! Monitor donations, requests, approvals and inventory from one place.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <div className="text-sm text-slate-500">Updated just now</div>

          <button
            onClick={fetchDashboard}
            disabled={refreshing}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {refreshing ? 'Refreshing...' : 'Refresh Dashboard'}
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard title="Total Users" value={overview.totalUsers} icon={Users} />

        <DashboardStatCard
          title="Donors"
          value={overview.totalDonors}
          icon={Heart}
          iconBg="bg-red-100 dark:bg-red-900/30"
          iconColor="text-red-600"
        />

        <DashboardStatCard
          title="Patients"
          value={overview.totalPatients}
          icon={UserRound}
          iconBg="bg-blue-100 dark:bg-blue-900/30"
          iconColor="text-blue-600"
        />

        <DashboardStatCard
          title="Hospitals"
          value={overview.totalHospitals}
          icon={Building2}
          iconBg="bg-emerald-100 dark:bg-emerald-900/30"
          iconColor="text-emerald-600"
        />

        <DashboardStatCard
          title="Pending Approvals"
          value={overview.pendingApprovals}
          icon={ClipboardList}
          iconBg="bg-amber-100 dark:bg-amber-900/30"
          iconColor="text-amber-600"
          onClick={() => navigate(ROUTES.ADMIN_USERS)}
        />

        <DashboardStatCard
          title="Completed Requests"
          value={overview.completedRequests}
          icon={Activity}
          iconBg="bg-violet-100 dark:bg-violet-900/30"
          iconColor="text-violet-600"
          onClick={() => navigate(ROUTES.ADMIN_REQUESTS)}
        />

        <DashboardStatCard
          title="Blood Units"
          value={inventorySummary.totalUnits}
          icon={Droplets}
          iconBg="bg-pink-100 dark:bg-pink-900/30"
          iconColor="text-pink-600"
          onClick={() => navigate(ROUTES.INVENTORY)}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <BloodDistributionChart data={bloodDistribution} />

        <LowStockCard bloodGroups={lowStock} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RequestStatisticsChart data={requestStatistics} />

        <RecentDonations
          total={donationStatistics.totalDonations}
          donations={donationStatistics.recentDonations}
        />
      </div>
    </div>
  );
};

export default DashboardOverview;
