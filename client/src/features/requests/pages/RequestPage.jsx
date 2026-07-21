import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ClipboardList, HeartPulse } from 'lucide-react';

import DashboardLayout from '../../../layouts/DashboardLayout';

import RequestForm from '../components/RequestForm';
import MyRequestList from '../components/MyRequestList';

import requestService from '../services/request.service';
import paymentService from '../../payments/services/payment.service';

import SkeletonTable from '../../../components/feedback/skeleton/SkeletonTable';
import EmptyState from '../../../components/feedback/empty-state/EmptyState';

import getApiError from '../../../utils/apiError';

const RequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(null);

  const fetchRequests = async () => {
    try {
      const response = await requestService.getMyRequests();
      setRequests(response.data);
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (request) => {
    try {
      setPaymentLoading(request._id);

      await paymentService.openCheckout({
        request,
        onSuccess: async () => {
          toast.success('Payment completed successfully.');
          await fetchRequests();
        },
      });
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setPaymentLoading(null);
    }
  };

  useEffect(() => {
    void fetchRequests();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <ClipboardList size={16} />
                Blood Requests
              </div>

              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blood Requests</h1>

              <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
                Create new blood requests, monitor approval status and complete payment securely
                after approval.
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 dark:bg-red-900/20">
              <HeartPulse size={42} className="text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        <RequestForm onSuccess={fetchRequests} />

        {loading ? (
          <SkeletonTable />
        ) : requests.length === 0 ? (
          <EmptyState
            title="No Requests Found"
            description="You haven't created any blood requests yet. Submit your first request using the form above."
          />
        ) : (
          <MyRequestList
            requests={requests}
            onPay={handlePayment}
            paymentLoading={paymentLoading}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default RequestPage;
  