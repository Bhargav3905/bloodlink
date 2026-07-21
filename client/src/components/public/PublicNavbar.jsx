import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';

import ThemeToggle from '../shared/theme-toggle/ThemeToggle';
import Button from '../ui/button/Button';

import { ROUTES } from '../../constants/routes';

const navLinks = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Workflow',
    href: '#workflow',
  },
  {
    label: 'Features',
    href: '#features',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'workflow', 'features', 'about', 'contact'];

      let current = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;

        if (window.scrollY >= top) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const id = href.replace('#', '');

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-950/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to={ROUTES.HOME} className="group flex items-center gap-2">
          <HeartPulse
            size={30}
            className="text-red-600 transition-transform duration-300 group-hover:scale-110"
          />

          <span className="text-xl font-bold text-slate-900 dark:text-white">BloodLink</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.replace('#', '')
                  ? 'bg-red-100 text-red-600 shadow-sm dark:bg-red-900/40 dark:text-red-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-red-600 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link to={ROUTES.LOGIN}>
            <Button variant="outline">Login</Button>
          </Link>

          <Link to={ROUTES.REGISTER}>
            <Button>Register</Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className=" rounded-xl p-2 text-slate-700 transition-all duration-200 md:hidden
                    hover:bg-slate-100 hover:text-red-600 hover:shadow-sm
                    dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-red-400
                    "
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`rounded-lg px-3 py-2 text-left font-medium transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-red-600 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}

            <ThemeToggle />

            <Link to={ROUTES.LOGIN} onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>

            <Link to={ROUTES.REGISTER} onClick={() => setIsOpen(false)}>
              <Button className="w-full">Register</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
