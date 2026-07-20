import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ClipboardCheck, ShieldCheck } from 'lucide-react';

import DashboardLayout from '../../../layouts/DashboardLayout';

import PendingRequestTable from '../components/PendingRequestTable';

import requestService from '../services/request.service';

import EmptyState from '../../../components/feedback/empty-state/EmptyState';
import SkeletonTable from '../../../components/feedback/skeleton/SkeletonTable';

import getApiError from '../../../utils/apiError';

const PendingRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const response = await requestService.getPendingRequests();
      setRequests(response.data);
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchRequests();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <ClipboardCheck size={16} />
                Admin Approval Queue
              </div>

              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Pending Blood Requests
              </h1>

              <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
                Review incoming blood requests, verify inventory requirements, and approve or reject
                each request before payment.
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 dark:bg-red-900/20">
              <ShieldCheck size={42} className="text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        {loading ? (
          <SkeletonTable />
        ) : requests.length === 0 ? (
          <EmptyState
            title="No Pending Requests"
            description="All blood requests have been reviewed. There are currently no requests awaiting admin approval."
          />
        ) : (
          <PendingRequestTable requests={requests} onRefresh={fetchRequests} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default PendingRequestsPage;
