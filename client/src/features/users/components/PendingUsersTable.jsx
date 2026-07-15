import Badge from '../../../components/ui/badge/Badge';
import Button from '../../../components/ui/button/Button';

import { formatDate } from '../../../utils/formatDate';

const PendingUsersTable = ({ users, onApprove, onReject }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">#</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Blood Group</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">City</th>

              <th className="px-6 py-4 text-left text-sm font-semibold">Registered</th>

              <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b border-slate-200 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
              >
                <td className="px-6 py-4 font-medium text-slate-500">{index + 1}</td>

                <td className="px-6 py-4 font-medium">{user.fullName}</td>

                <td className="px-6 py-4">{user.email}</td>

                <td className="px-6 py-4">
                  <Badge variant={user.role === 'hospital' ? 'info' : 'warning'}>{user.role}</Badge>
                </td>

                <td className="px-6 py-4">{user.bloodGroup}</td>

                <td className="px-6 py-4">{user.city}</td>

                <td className="px-6 py-4">{formatDate(user.createdAt)}</td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="success" onClick={() => onApprove(user)}>
                      Approve
                    </Button>

                    <Button size="sm" variant="danger" onClick={() => onReject(user)}>
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
  );
};

export default PendingUsersTable;
