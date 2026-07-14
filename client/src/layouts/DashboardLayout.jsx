import Sidebar from '../components/dashboard/layout/Sidebar';
import Navbar from '../components/dashboard/layout/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
