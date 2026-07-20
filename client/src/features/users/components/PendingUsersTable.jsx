import { UserRound, Droplets, CheckCircle2, XCircle } from 'lucide-react';

import Badge from '../../../components/ui/badge/Badge';
import Button from '../../../components/ui/button/Button';

import { formatDate } from '../../../utils/formatDate';

const PendingUsersTable = ({ users, onApprove, onReject }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Pending Registrations
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Review donor and hospital accounts before granting access.
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
                User
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Blood
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                City
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Registered
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
              >
                <td className="px-6 py-5 font-medium text-slate-500">
                  {index + 1}
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
                      <UserRound
                        size={18}
                        className="text-slate-600 dark:text-slate-300"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {user.fullName}
                      </p>

                      <p className="text-sm text-slate-500">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <Badge
                    variant={
                      user.role === 'hospital'
                        ? 'info'
                        : 'warning'
                    }
                  >
                    {user.role}
                  </Badge>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 font-semibold text-red-600">
                    <Droplets size={16} />
                    {user.bloodGroup}
                  </div>
                </td>

                <td className="px-6 py-5 text-slate-700 dark:text-slate-300">
                  {user.city}
                </td>

                <td className="px-6 py-5 text-slate-500">
                  {formatDate(user.createdAt)}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    <Button
                      size="sm"
                      variant="success"
                      className="gap-2"
                      onClick={() => onApprove(user)}
                    >
                      <CheckCircle2 size={15} />
                      Approve
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      className="gap-2"
                      onClick={() => onReject(user)}
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
  );
};

export default PendingUsersTable;