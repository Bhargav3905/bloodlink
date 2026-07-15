import DashboardLayout from '../../../layouts/DashboardLayout';

import DonationForm from '../components/DonationForm';

const DonateBlood = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Donate Blood</h1>

          <p className="mt-2 text-slate-500">
            Record a blood donation to update the central inventory.
          </p>
        </div>

        <DonationForm />
      </div>
    </DashboardLayout>
  );
};

export default DonateBlood;
