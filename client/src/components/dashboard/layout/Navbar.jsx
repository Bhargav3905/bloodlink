import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

import ThemeToggle from '../../shared/theme-toggle/ThemeToggle';
import Button from '../../ui/button/Button';

import { ROUTES } from '../../../constants/routes';

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();

    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex items-center gap-4">

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">BloodLink</h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">Blood Management System</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <div className="hidden text-right md:block">
          <p className="font-semibold text-slate-900 dark:text-white">{user?.fullName}</p>

          <p className="text-xs font-medium capitalize tracking-wide text-slate-500 dark:text-slate-400">
            {user?.role}
          </p>
        </div>

        <Button variant="danger" size="sm" onClick={handleLogout} className="gap-2">
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
