import { HeartHandshake, HeartPulse } from 'lucide-react';

import DashboardLayout from '../../../layouts/DashboardLayout';

import DonationForm from '../components/DonationForm';

const DonateBlood = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <HeartHandshake size={16} />
                Blood Donation
              </div>

              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Donate Blood</h1>

              <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
                Record a blood donation to securely update the central blood inventory and help save
                lives.
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 dark:bg-red-900/20">
              <HeartPulse size={42} className="text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        <DonationForm />
      </div>
    </DashboardLayout>
  );
};

export default DonateBlood;
