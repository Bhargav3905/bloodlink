import Badge from '../../../components/ui/badge/Badge';

import { formatDate } from '../../../utils/formatDate';

const DonationHistoryTable = ({ donations }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4 text-left">#</th>

              <th className="px-6 py-4 text-left">Donor</th>

              <th className="px-6 py-4 text-left">Role</th>

              <th className="px-6 py-4 text-left">Blood Group</th>

              <th className="px-6 py-4 text-left">Units</th>

              <th className="px-6 py-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((donation, index) => (
              <tr
                key={donation._id}
                className="border-b border-slate-200 text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800/40"
              >
                <td className="px-6 py-4">{index + 1}</td>

                <td className="px-6 py-4">{donation.donor?.fullName}</td>

                <td className="px-6 py-4">
                  <Badge variant={donation.donorType === 'hospital' ? 'info' : 'warning'}>
                    {donation.donorType}
                  </Badge>
                </td>

                <td className="px-6 py-4">{donation.bloodGroup}</td>

                <td className="px-6 py-4">{donation.quantity}</td>

                <td className="px-6 py-4">{formatDate(donation.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistoryTable;
