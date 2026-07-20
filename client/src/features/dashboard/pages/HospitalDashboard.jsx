import { Building2, ClipboardList, Droplets, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import DashboardStatCard from '../../../components/dashboard/DashboardStatCard';
import Button from '../../../components/ui/button/Button';

import { ROUTES } from '../../../constants/routes';

const HospitalDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white shadow-xl dark:border-slate-800">
        <h1 className="text-4xl font-bold">Hospital Dashboard</h1>

        <p className="mt-3 max-w-2xl text-blue-100">
          Manage blood inventory, donate blood and submit emergency blood requests efficiently.
        </p>

        <Button
          className="mt-8 bg-white text-blue-700 hover:bg-blue-50"
          onClick={() => navigate(ROUTES.HOSPITAL_REQUESTS)}
        >
          Create Request
          <ArrowRight size={18} />
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <DashboardStatCard
          title="Blood Requests"
          value="Manage"
          icon={ClipboardList}
          onClick={() => navigate(ROUTES.HOSPITAL_REQUESTS)}
        />

        <DashboardStatCard
          title="Inventory"
          value="View"
          icon={Droplets}
          onClick={() => navigate(ROUTES.INVENTORY)}
        />

        <DashboardStatCard
          title="Profile"
          value="Manage"
          icon={Building2}
          onClick={() => navigate(ROUTES.PROFILE)}
        />
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Hospital Portal</h2>

        <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
          Monitor requests, contribute donations and maintain healthy blood inventory through one
          centralized dashboard.
        </p>
      </div>
    </div>
  );
};

export default HospitalDashboard;
