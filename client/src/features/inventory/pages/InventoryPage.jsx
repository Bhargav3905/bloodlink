import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import DashboardLayout from '../../../layouts/DashboardLayout';

import InventoryGrid from '../components/InventoryGrid';
import InventorySummary from '../components/InventorySummary';

import SkeletonDashboard from '../../../components/feedback/skeleton/SkeletonDashboard';
import EmptyState from '../../../components/feedback/empty-state/EmptyState';

import inventoryService from '../services/inventory.service';
import adminService from '../../admin/services/admin.service';

import { useAuth } from '../../../contexts/AuthContext';
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
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blood Inventory</h1>

          <p className="mt-2 text-slate-500">Monitor blood availability across all blood groups.</p>
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
              <EmptyState title="Inventory Empty" description="No blood inventory available." />
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
