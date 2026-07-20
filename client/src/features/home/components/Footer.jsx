import { HeartPulse, Mail, ArrowUpRight, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const technologies = ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'];

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}

        <div>
          <div className="mb-6 flex items-center gap-3">
            <HeartPulse size={34} className="text-red-500" />

            <h2 className="text-3xl font-bold text-white">BloodLink</h2>
          </div>

          <p className="leading-8 text-slate-400">
            Modern blood management connecting donors, hospitals, patients and administrators
            through one secure ecosystem.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 transition hover:text-red-400"
                >
                  <ChevronRight size={16} className="transition group-hover:translate-x-1" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}

        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">Built With</h3>

          <ul className="space-y-4">
            {technologies.map((tech) => (
              <li key={tech} className="text-slate-400 transition hover:text-white">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">Connect</h3>

          <div className="space-y-5">
            <a
              href="mailto:bhargavadmin1@gmail.com"
              className="group flex items-center gap-3 transition hover:text-red-400"
            >
              <Mail size={18} className="transition group-hover:scale-110" />
              <span>bhargavadmin1@gmail.com</span>
            </a>

            <a
              href="https://github.com/Bhargav3905/BloodLink"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 transition hover:text-red-400"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-md text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} BloodLink. All rights reserved.</p>

          <p>
            Built with <span className="text-red-500">❤</span> using the MERN Stack.
          </p>

          <p>
            Made by <span className="font-semibold text-white">Bhargav Prajapati</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
