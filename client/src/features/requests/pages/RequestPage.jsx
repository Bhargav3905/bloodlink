import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import DashboardLayout from '../../../layouts/DashboardLayout';

import RequestForm from '../components/RequestForm';
import MyRequestList from '../components/MyRequestList';

import requestService from '../services/request.service';

import SkeletonTable from '../../../components/feedback/skeleton/SkeletonTable';
import EmptyState from '../../../components/feedback/empty-state/EmptyState';

import getApiError from '../../../utils/apiError';

import paymentService from '../../payments/services/payment.service';

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
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blood Requests</h1>

          <p className="mt-2 text-slate-500">Create and track your blood requests.</p>
        </div>

        <RequestForm onSuccess={fetchRequests} />

        {loading ? (
          <SkeletonTable />
        ) : requests.length === 0 ? (
          <EmptyState
            title="No Requests"
            description="You haven't created any blood requests yet."
          />
        ) : (
          <MyRequestList requests={requests} onPay={handlePayment} paymentLoading={paymentLoading} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default RequestPage;
