import { ClipboardList, Droplets, UserRound, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import DashboardStatCard from '../../../components/dashboard/DashboardStatCard';
import Button from '../../../components/ui/button/Button';

import { ROUTES } from '../../../constants/routes';

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white shadow-xl dark:border-slate-800">
        <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

        <p className="mt-3 max-w-2xl text-violet-100">
          Request blood securely, track request status and manage your profile from one place.
        </p>

        <Button
          className="mt-8 bg-white text-violet-700 hover:bg-violet-50"
          onClick={() => navigate(ROUTES.PATIENT_REQUESTS)}
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
          onClick={() => navigate(ROUTES.PATIENT_REQUESTS)}
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
          icon={UserRound}
          onClick={() => navigate(ROUTES.PROFILE)}
        />
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Need Blood?</h2>

        <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
          Create blood requests, complete secure payments after approval and track your request
          until completion.
        </p>
      </div>
    </div>
  );
};

export default PatientDashboard;
