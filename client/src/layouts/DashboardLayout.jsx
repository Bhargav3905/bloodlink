import Sidebar from '../components/dashboard/layout/Sidebar';
import Navbar from '../components/dashboard/layout/Navbar';

import useSidebar from '../hooks/useSidebar';

const DashboardLayout = ({ children }) => {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? 'lg:ml-20' : 'lg:ml-64'
        }`}
      >
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
