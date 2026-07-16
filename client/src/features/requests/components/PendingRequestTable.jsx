import { useState } from 'react';
import toast from 'react-hot-toast';

import Badge from '../../../components/ui/badge/Badge';
import Button from '../../../components/ui/button/Button';

import ConfirmationDialog from '../../../components/feedback/confirmation-dialog/ConfirmationDialog';

import requestService from '../services/request.service';

import { formatDate } from '../../../utils/formatDate';
import getApiError from '../../../utils/apiError';

const PendingRequestTable = ({ requests, onRefresh }) => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [action, setAction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);

      let response;

      if (action === 'approve') {
        response = await requestService.approveRequest(selectedRequest._id);
      } else {
        response = await requestService.rejectRequest(selectedRequest._id);
      }

      toast.success(response.message);

      setSelectedRequest(null);
      setAction(null);

      onRefresh();
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Requester</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Blood</th>
              <th className="px-4 py-3 text-left">Units</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request, index) => (
              <tr key={request._id} className="border-t border-slate-200 dark:border-slate-700">
                <td className="px-4 py-3">{index + 1}</td>

                <td className="px-4 py-3">
                  <p className="font-semibold">{request.requester.fullName}</p>

                  <p className="text-sm text-slate-500">{request.requester.email}</p>
                </td>

                <td className="px-4 py-3 capitalize">
                  <Badge>{request.requesterType}</Badge>
                </td>

                <td className="px-4 py-3 font-semibold text-red-600">{request.bloodGroup}</td>

                <td className="px-4 py-3">{request.quantity}</td>

                <td className="px-4 py-3">{formatDate(request.createdAt)}</td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => {
                        setSelectedRequest(request);
                        setAction('approve');
                      }}
                    >
                      Approve
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        setSelectedRequest(request);
                        setAction('reject');
                      }}
                    >
                      Reject
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmationDialog
        open={!!selectedRequest}
        title={action === 'approve' ? 'Approve Request' : 'Reject Request'}
        description={`Are you sure you want to ${action} this blood request?`}
        onCancel={() => {
          if (loading) return;
          setSelectedRequest(null);
          setAction(null);
        }}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default PendingRequestTable;
