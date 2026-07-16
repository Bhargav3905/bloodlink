import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

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
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Pending Blood Requests
          </h1>

          <p className="mt-2 text-slate-500">Review and manage pending blood requests.</p>
        </div>

        {loading ? (
          <SkeletonTable />
        ) : requests.length === 0 ? (
          <EmptyState
            title="No Pending Requests"
            description="There are no blood requests awaiting approval."
          />
        ) : (
          <PendingRequestTable requests={requests} onRefresh={fetchRequests} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default PendingRequestsPage;
