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
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            <th className="px-4 py-3 text-left">Blood</th>
            <th className="px-4 py-3 text-left">Units</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Payment</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => {
            console.log('Request:', request);

            return (
              <tr key={request._id} className="border-t border-slate-200 dark:border-slate-700">
                <td className="px-4 py-3 font-semibold text-red-600">{request.bloodGroup}</td>

                <td className="px-4 py-3">{request.quantity}</td>

                <td className="px-4 py-3">
                  <Badge variant={statusVariant[request.status] || 'default'}>
                    {request.status
                      .replaceAll('_', ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Badge>
                </td>

                <td className="px-4 py-3">
                  {request.paymentStatus ? (
                    <Badge variant="success">Paid</Badge>
                  ) : (
                    <Badge variant="warning">Pending</Badge>
                  )}
                </td>

                <td className="px-4 py-3 text-center">
                  {request.status === REQUEST_STATUS.PAYMENT_PENDING ? (
                    <Button
                      size="sm"
                      loading={paymentLoading === request._id}
                      disabled={paymentLoading === request._id}
                      onClick={() => onPay(request)}
                    >
                      Pay ₹{request.processingFee}
                    </Button>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyRequestList;
