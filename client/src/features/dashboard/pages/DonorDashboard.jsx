import { Heart, UserRound, ArrowRight, Droplets } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/ui/button/Button';
import DashboardStatCard from '../../../components/dashboard/DashboardStatCard';

import { ROUTES } from '../../../constants/routes';

const DonorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-red-600 to-rose-600 p-8 text-white shadow-xl dark:border-slate-800">
        <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

        <p className="mt-3 max-w-2xl text-red-100">
          Every donation can save multiple lives. Thank you for being a BloodLink donor.
        </p>

        <Button
          className="mt-8 bg-white text-red-600 hover:bg-red-50"
          onClick={() => navigate(ROUTES.DONOR_DONATIONS)}
        >
          Donate Blood
          <ArrowRight size={18} />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <DashboardStatCard
          title="Donate Blood"
          value="Ready"
          icon={Heart}
          onClick={() => navigate(ROUTES.DONOR_DONATIONS)}
        />

        <DashboardStatCard
          title="Blood Inventory"
          value="View"
          icon={Droplets}
          onClick={() => navigate(ROUTES.INVENTORY)}
        />

        <DashboardStatCard
          title="Profile"
          value="Manage"
          icon={UserRound}
          onClick={() => navigate(ROUTES.PROFILE)}
        />
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Thank You ❤️</h2>

        <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
          Your contribution helps hospitals maintain healthy blood inventory and saves lives during
          emergencies.
        </p>
      </div>
    </div>
  );
};

export default DonorDashboard;
