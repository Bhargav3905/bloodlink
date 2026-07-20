import { CreditCard, Droplets } from 'lucide-react';

import Button from '../../../components/ui/button/Button';
import Badge from '../../../components/ui/badge/Badge';

import { REQUEST_STATUS } from '../../../constants/requestStatus';

const statusVariant = {
  [REQUEST_STATUS.PENDING]: 'warning',
  [REQUEST_STATUS.PAYMENT_PENDING]: 'info',
  [REQUEST_STATUS.COMPLETED]: 'success',
  [REQUEST_STATUS.REJECTED]: 'danger',
  [REQUEST_STATUS.APPROVED]: 'default',
  [REQUEST_STATUS.EXPIRED]: 'danger',
};

const MyRequestList = ({ requests, onPay, paymentLoading }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}

      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">My Blood Requests</h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Track request progress and complete payment after approval.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50 dark:bg-slate-800/60">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Blood Group
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Units
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Payment
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <tr
                key={request._id}
                className="transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-red-100 p-2 dark:bg-red-900/30">
                      <Droplets size={18} className="text-red-600" />
                    </div>

                    <span className="font-bold text-red-600">{request.bloodGroup}</span>
                  </div>
                </td>

                <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">
                  {request.quantity}
                </td>

                <td className="px-6 py-5">
                  <Badge variant={statusVariant[request.status] || 'default'}>
                    {request.status
                      .replaceAll('_', ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Badge>
                </td>

                <td className="px-6 py-5">
                  {request.paymentStatus ? (
                    <Badge variant="success">Paid</Badge>
                  ) : (
                    <Badge variant="warning">Pending</Badge>
                  )}
                </td>

                <td className="px-6 py-5 text-center">
                  {request.status === REQUEST_STATUS.PAYMENT_PENDING ? (
                    <Button
                      size="sm"
                      loading={paymentLoading === request._id}
                      disabled={paymentLoading === request._id}
                      onClick={() => onPay(request)}
                      className="gap-2"
                    >
                      <CreditCard size={15} />
                      Pay ₹{request.processingFee}
                    </Button>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRequestList;
