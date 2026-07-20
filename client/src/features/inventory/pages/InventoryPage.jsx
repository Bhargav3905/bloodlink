import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Activity, Droplets } from 'lucide-react';

import DashboardLayout from '../../../layouts/DashboardLayout';

import InventoryGrid from '../components/InventoryGrid';
import InventorySummary from '../components/InventorySummary';

import SkeletonDashboard from '../../../components/feedback/skeleton/SkeletonDashboard';
import EmptyState from '../../../components/feedback/empty-state/EmptyState';

import inventoryService from '../services/inventory.service';
import adminService from '../../admin/services/admin.service';

import useAuth from '../../../hooks/useAuth';

import { ROLES } from '../../../constants/roles';

import getApiError from '../../../utils/apiError';

const InventoryPage = () => {
  const { user } = useAuth();

  const [inventory, setInventory] = useState([]);
  const [summary, setSummary] = useState(null);
  const [lowStock, setLowStock] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const inventoryResponse = await inventoryService.getInventory();

        setInventory(inventoryResponse.data);

        if (user?.role === ROLES.ADMIN) {
          const [summaryResponse, lowStockResponse] = await Promise.all([
            adminService.getInventorySummary(),
            adminService.getLowStock(),
          ]);

          setSummary(summaryResponse.data);
          setLowStock(lowStockResponse.data);
        }
      } catch (error) {
        toast.error(getApiError(error));
      } finally {
        setLoading(false);
      }
    };

    void fetchInventory();
  }, [user]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <Droplets size={16} />
                Blood Inventory
              </div>

              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blood Inventory</h1>

              <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
                Monitor real-time blood availability across all blood groups and maintain a healthy
                inventory.
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 dark:bg-red-900/20">
              <Activity size={42} className="text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        {loading ? (
          <SkeletonDashboard />
        ) : (
          <>
            {user?.role === ROLES.ADMIN && (
              <InventorySummary
                totalUnits={summary?.totalUnits ?? 0}
                totalBloodGroups={inventory.length}
                lowStockCount={lowStock.length}
              />
            )}

            {inventory.length === 0 ? (
              <EmptyState
                title="Inventory Empty"
                description="No blood inventory is currently available."
              />
            ) : (
              <InventoryGrid inventory={inventory} lowStock={lowStock} />
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InventoryPage;
