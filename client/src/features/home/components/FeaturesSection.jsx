import {
  HeartHandshake,
  Building2,
  Droplets,
  ShieldCheck,
  CreditCard,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    title: 'Blood Donation',
    description: 'Registered donors and hospitals can securely contribute blood inventory.',
    icon: HeartHandshake,
  },
  {
    title: 'Blood Requests',
    description: 'Patients and hospitals can request blood with an approval workflow.',
    icon: Building2,
  },
  {
    title: 'Real-Time Inventory',
    description: 'Track blood availability across all eight blood groups instantly.',
    icon: Droplets,
  },
  {
    title: 'Role-Based Security',
    description: 'Separate dashboards and permissions for every user role.',
    icon: ShieldCheck,
  },
  {
    title: 'Secure Payments',
    description: 'Integrated Razorpay payment flow for approved blood requests.',
    icon: CreditCard,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Visual insights into inventory, requests and donations.',
    icon: BarChart3,
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-white via-slate-50 to-white py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm dark:bg-red-900/30 dark:text-red-300">
            Platform Features
          </span>

          <h2 className="mt-6 text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Everything Needed For Modern Blood Management
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            BloodLink simplifies blood donation, request management, inventory tracking and
            administration through one secure platform.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group h-full rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-900 hover:border-red-300 hover:bg-red-50/40 dark:hover:bg-slate-800/40"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 dark:bg-red-900/30">
                  <Icon size={30} className="text-red-600" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-[15px] text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
