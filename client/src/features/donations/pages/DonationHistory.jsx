import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import DashboardLayout from '../../../layouts/DashboardLayout';

import DonationHistoryTable from '../components/DonationHistoryTable';

import SkeletonTable from '../../../components/feedback/skeleton/SkeletonTable';
import EmptyState from '../../../components/feedback/empty-state/EmptyState';

import donationService from '../services/donation.service';

import getApiError from '../../../utils/apiError';

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await donationService.getDonationHistory();
        setDonations(response.data);
      } catch (error) {
        toast.error(getApiError(error));
      } finally {
        setLoading(false);
      }
    };

    void fetchDonations();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Donation History</h1>

            <p className="mt-2 text-slate-600 dark:text-slate-400">Monitor every donation recorded in BloodLink.</p>
          </div>

          {!loading && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Donations</p>

              <p className="text-2xl font-bold text-red-600">{donations.length}</p>
            </div>
          )}
        </div>

        {loading ? (
          <SkeletonTable />
        ) : donations.length === 0 ? (
          <EmptyState title="No Donations Found" description="Donation records will appear here." />
        ) : (
          <DonationHistoryTable donations={donations} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default DonationHistory;
