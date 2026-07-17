import useAuth from '../../../hooks/useAuth';

import { SIDEBAR_ITEMS } from '../../../constants/sidebar';

import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { user } = useAuth();

  const items = SIDEBAR_ITEMS[user?.role] ?? [];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-full flex-col p-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">BloodLink</h1>

          <p className="mt-1 text-sm text-slate-500">Blood Management</p>
        </div>

        <nav className="mt-10 flex-1 space-y-2">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
