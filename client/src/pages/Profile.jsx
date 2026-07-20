import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import DashboardLayout from '../layouts/DashboardLayout';

import ProfileCard from '../features/profile/components/ProfileCard';

import userService from '../features/users/services/user.service';

import SkeletonProfile from '../components/feedback/skeleton/SkeletonProfile';

import getApiError from '../utils/apiError';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const fetchProfile = async () => {
    try {
      const response = await userService.getProfile();

      setUser(response.data);
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchProfile();
  }, []);

  const handleUpdate = async (data) => {
    try {
      setLoading(true);

      const response = await userService.updateProfile(data);

      setUser(response.data);

      toast.success(response.message);

      setEditing(false);
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  if (loading && !user) {
    return (
      <DashboardLayout>
        <SkeletonProfile />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Profile</h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            View and update your personal information to keep your BloodLink account up to date.
          </p>
        </div>

        <ProfileCard
          user={user}
          loading={loading}
          editing={editing}
          onEdit={() => setEditing(true)}
          onCancel={() => setEditing(false)}
          onSubmit={handleUpdate}
        />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
