import { HeartPulse } from 'lucide-react';

import useAuth from '../../../hooks/useAuth';
import useSidebar from '../../../hooks/useSidebar';

import { SIDEBAR_ITEMS } from '../../../constants/sidebar';

import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { user } = useAuth();

  const { collapsed, mobileOpen, closeMobileSidebar } = useSidebar();

  const items = SIDEBAR_ITEMS[user?.role] ?? [];

  return (
    <>
      
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          flex-col
          border-r
          border-slate-200
          bg-white
          transition-all
          duration-300
          ease-in-out
          dark:border-slate-800
          dark:bg-slate-900

          ${collapsed ? 'w-20' : 'w-64'}

          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex h-full flex-col p-5">
          
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
            <HeartPulse size={34} className="shrink-0 text-red-600" />

            {!collapsed && (
              <div className="overflow-hidden">
                <h1 className="text-2xl font-bold text-red-600">BloodLink</h1>

                <p className="text-sm text-slate-500">Blood Management</p>
              </div>
            )}
          </div>

          <nav className="mt-10 flex-1 space-y-2">
            {items.map((item) => (
              <SidebarItem key={item.path} item={item} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
