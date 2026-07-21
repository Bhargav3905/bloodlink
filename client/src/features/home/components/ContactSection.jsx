import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT } from '../../../constants/contact';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT.EMAIL,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: CONTACT.PHONE,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: CONTACT.LOCATION,
  },
  {
    icon: Clock,
    title: 'Availability',
    value: '24 × 7 Emergency Support',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm dark:bg-red-900/30 dark:text-red-300">
            Contact
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Have questions, suggestions or need assistance? Our team is always ready to help you.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-red-300 hover:bg-red-50/40 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800/40"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-red-900/30">
                  <Icon size={30} className="text-red-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="break-words text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
