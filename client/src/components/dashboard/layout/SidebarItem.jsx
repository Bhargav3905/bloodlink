import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import useSidebar from '../../../hooks/useSidebar';

const SidebarItem = ({ item }) => {
  const { collapsed, closeMobileSidebar } = useSidebar();

  const Icon = item.icon;

  return (
    <>
      <NavLink
        to={item.path}
        onClick={closeMobileSidebar}
        data-tooltip-id={collapsed ? item.label : undefined}
        data-tooltip-content={collapsed ? item.label : undefined}
        className={({ isActive }) =>
          `group relative flex items-center rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
            collapsed ? 'justify-center' : 'gap-3'
          } ${
            isActive
              ? 'bg-red-600 text-white shadow-lg shadow-red-500/20'
              : 'text-slate-600 hover:bg-red-50 hover:text-red-600 dark:text-slate-300 dark:hover:bg-slate-800'
          }`
        }
      >
        <Icon size={20} className="shrink-0" />

        {!collapsed && <span className="truncate">{item.label}</span>}
      </NavLink>

      {collapsed && (
        <Tooltip
          id={item.label}
          place="right"
          className="!rounded-lg !bg-slate-900 !px-3 !py-2 !text-sm"
        />
      )}
    </>
  );
};

export default SidebarItem;
