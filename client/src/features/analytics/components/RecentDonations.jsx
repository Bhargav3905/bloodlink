import { Droplets, CalendarDays } from 'lucide-react';

import { formatDate } from '../../../utils/formatDate';

const RecentDonations = ({ total = 0, donations = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Recent Donations</h2>

          <p className="mt-1 text-sm text-slate-500">Latest blood donations received.</p>
        </div>

        <div className="rounded-xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
          Total {total}
        </div>
      </div>

      {donations.length === 0 ? (
        <div className="flex h-56 items-center justify-center rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700">
          <div className="text-center">
            <Droplets className="mx-auto mb-3 h-10 w-10 text-slate-400" />

            <h3 className="font-semibold text-slate-700 dark:text-slate-300">No Donations Yet</h3>

            <p className="mt-1 text-sm text-slate-500">Recent donations will appear here.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-red-300 hover:shadow-md dark:border-slate-700 dark:hover:border-red-700"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 font-bold text-red-600 dark:bg-red-900/30">
                  {donation.donor.fullName.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {donation.donor.fullName}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-lg bg-red-100 px-2 py-1 text-xs font-semibold text-red-600 dark:bg-red-900/30">
                      {donation.bloodGroup}
                    </span>

                    <span className="rounded-lg bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30">
                      {donation.quantity} Unit
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={16} />

                {formatDate(donation.createdAt)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentDonations;
