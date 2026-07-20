import { useState } from 'react';
import toast from 'react-hot-toast';
import { CheckCircle2, XCircle, Droplets, UserRound } from 'lucide-react';

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
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Pending Requests</h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Review every request before inventory allocation and payment.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  #
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Requester
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Blood
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Units
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Requested
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request, index) => (
                <tr
                  key={request._id}
                  className="transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5 font-medium text-slate-500">{index + 1}</td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
                        <UserRound size={18} className="text-slate-600 dark:text-slate-300" />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {request.requester.fullName}
                        </p>

                        <p className="text-sm text-slate-500">{request.requester.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <Badge>{request.requesterType}</Badge>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 font-bold text-red-600">
                      <Droplets size={16} />
                      {request.bloodGroup}
                    </div>
                  </td>

                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                    {request.quantity}
                  </td>

                  <td className="px-6 py-5 text-slate-500">{formatDate(request.createdAt)}</td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <Button
                        size="sm"
                        variant="success"
                        className="gap-2"
                        onClick={() => {
                          setSelectedRequest(request);
                          setAction('approve');
                        }}
                      >
                        <CheckCircle2 size={15} />
                        Approve
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        className="gap-2"
                        onClick={() => {
                          setSelectedRequest(request);
                          setAction('reject');
                        }}
                      >
                        <XCircle size={15} />
                        Reject
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
