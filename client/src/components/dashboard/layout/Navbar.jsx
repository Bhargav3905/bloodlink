import { LogOut, PanelLeft, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import useSidebar from '../../../hooks/useSidebar';

import ThemeToggle from '../../shared/theme-toggle/ThemeToggle';
import Button from '../../ui/button/Button';

import { ROUTES } from '../../../constants/routes';

const Navbar = () => {
  const { user, logout } = useAuth();

  const { toggleSidebar } = useSidebar();

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
        
        <button
          onClick={toggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-red-900 dark:hover:bg-slate-800 dark:hover:text-red-400"
          aria-label="Toggle Sidebar"
        >
          
          <PanelLeft size={20} className="hidden lg:block" />

          <Menu size={20} className="lg:hidden" />
        </button>

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
