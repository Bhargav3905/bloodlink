import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

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
      <div className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Pending User Approvals
            </h1>

            <p className="mt-2 text-slate-500">
              Approve or reject donor and hospital registrations.
            </p>
          </div>

          {!loading && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="text-sm text-slate-500">Total Pending</p>

              <p className="text-2xl font-bold text-red-600">{pendingUsers.length}</p>
            </div>
          )}
        </div>

        {loading ? (
          <SkeletonTable />
        ) : pendingUsers.length === 0 ? (
          <EmptyState
            title="No Pending Users"
            description="All donor and hospital registrations have been reviewed."
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
