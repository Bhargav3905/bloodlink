import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { UserCheck, ShieldCheck } from 'lucide-react';

import DashboardLayout from '../../../layouts/DashboardLayout';

import PendingUsersTable from '../components/PendingUsersTable';

import SkeletonTable from '../../../components/feedback/skeleton/SkeletonTable';
import EmptyState from '../../../components/feedback/empty-state/EmptyState';
import ConfirmationDialog from '../../../components/feedback/confirmation-dialog/ConfirmationDialog';

import userService from '../services/user.service';

import getApiError from '../../../utils/apiError';

const Users = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchPendingUsers = async () => {
    try {
      const response = await userService.getPendingUsers();
      setPendingUsers(response.data);
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchPendingUsers();
  }, []);

  const openApproveDialog = (user) => {
    setSelectedUser(user);
    setActionType('approve');
  };

  const openRejectDialog = (user) => {
    setSelectedUser(user);
    setActionType('reject');
  };

  const closeDialog = () => {
    if (actionLoading) return;

    setSelectedUser(null);
    setActionType(null);
  };

  const handleConfirm = async () => {
    if (!selectedUser) return;

    try {
      setActionLoading(true);

      let response;

      if (actionType === 'approve') {
        response = await userService.approveUser(selectedUser._id);
      } else {
        response = await userService.rejectUser(selectedUser._id);
      }

      toast.success(response.message);

      setPendingUsers((prev) => prev.filter((user) => user._id !== selectedUser._id));

      closeDialog();
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <UserCheck size={16} />
                Registration Approval
              </div>

              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Pending User Approvals
              </h1>

              <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
                Review donor and hospital registrations before granting platform access.
              </p>
            </div>

            {!loading && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <ShieldCheck size={18} />

                  <span className="text-sm font-semibold">Pending Approvals</span>
                </div>

                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {pendingUsers.length}
                </p>
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <SkeletonTable />
        ) : pendingUsers.length === 0 ? (
          <EmptyState
            title="No Pending Users"
            description="All donor and hospital registrations have already been reviewed."
          />
        ) : (
          <PendingUsersTable
            users={pendingUsers}
            onApprove={openApproveDialog}
            onReject={openRejectDialog}
          />
        )}

        <ConfirmationDialog
          open={!!selectedUser}
          title={actionType === 'approve' ? 'Approve User' : 'Reject User'}
          description={
            actionType === 'approve'
              ? `Approve ${selectedUser?.fullName}'s account?`
              : `Reject ${selectedUser?.fullName}'s account?`
          }
          onCancel={closeDialog}
          onConfirm={handleConfirm}
          loading={actionLoading}
        />
      </div>
    </DashboardLayout>
  );
};

export default Users;
