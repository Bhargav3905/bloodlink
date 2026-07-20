import { HeartHandshake, ShieldCheck, Building2, Users } from 'lucide-react';

const cards = [
  {
    title: 'Donors',
    description: 'Donate blood securely while maintaining donation history and eligibility rules.',
    icon: HeartHandshake,
  },
  {
    title: 'Hospitals',
    description: 'Manage blood donations and raise requests whenever inventory is required.',
    icon: Building2,
  },
  {
    title: 'Patients',
    description: 'Request compatible blood through a verified and secure approval workflow.',
    icon: Users,
  },
  {
    title: 'Administration',
    description: 'Monitor users, inventory, requests and analytics from one centralized dashboard.',
    icon: ShieldCheck,
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white via-slate-50 to-white py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm dark:bg-red-900/30 dark:text-red-300">
            About BloodLink
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Connecting People Through Smart Blood Management
          </h2>

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-600 dark:text-slate-400">
            BloodLink is a modern blood bank management platform that connects donors, hospitals,
            patients and administrators through a secure, transparent and efficient workflow.
          </p>

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-600 dark:text-slate-400">
            From donations and inventory management to request approvals, secure payments and
            analytics, every process is streamlined to reduce delays and improve blood availability
            when it matters most.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-7 sm:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group h-full rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-red-300 hover:bg-red-50/40 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-900 dark:hover:bg-slate-800/40"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 dark:bg-red-900/30">
                  <Icon size={30} className="text-red-600" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
