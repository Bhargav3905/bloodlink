import { useAuth } from '../../../contexts/AuthContext';
import { SIDEBAR_ITEMS } from '../../../constants/sidebar';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { user } = useAuth();

  const items = SIDEBAR_ITEMS[user?.role] || [];

  return (
    <aside className="w-64 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-red-600">BloodLink</h1>

        <nav className="mt-8 space-y-2">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
