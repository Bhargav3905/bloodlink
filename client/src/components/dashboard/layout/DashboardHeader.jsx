import { useAuth } from '../../../contexts/AuthContext';

const DashboardHeader = ({ title, description }) => {
  const { user } = useAuth();

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h1>

        <p className="mt-1 text-slate-500 dark:text-slate-400">{description}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold text-slate-900 dark:text-white">Welcome,</p>

        <p className="text-red-600">{user?.fullName}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
