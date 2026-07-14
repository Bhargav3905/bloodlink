import { NavLink } from 'react-router-dom';

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition
        ${
          isActive
            ? 'bg-red-600 text-white'
            : 'text-slate-600 hover:bg-red-50 hover:text-red-600 dark:text-slate-300 dark:hover:bg-slate-800'
        }`
      }
    >
      <Icon size={20} />

      <span>{item.label}</span>
    </NavLink>
  );
};

export default SidebarItem;
