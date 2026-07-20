import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../../../components/ui/button/Button';

import { ROUTES } from '../../../constants/routes';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-600 to-red-700 py-24">
      {/* Background Effects */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-300/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl">
          <Heart size={42} className="fill-white text-white" />
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
          Every Donation
          <br />
          Can Save A Life
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-red-100">
          Become part of a secure blood donation network that connects donors, hospitals and
          patients when every second matters.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to={ROUTES.REGISTER}>
            <Button className="shadow-xl shadow-red-900/30">
              Register Now
              <ArrowRight size={18} />
            </Button>
          </Link>

          <Link to={ROUTES.LOGIN}>
            <Button
              className="
              bg-white text-slate-900 border border-white shadow-lg
              hover:bg-slate-100 hover:scale-105
              dark:bg-slate-900 dark:text-white
              dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Login
            </Button>
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-10 text-red-100">
          <div>
            <p className="text-3xl font-bold text-white">8</p>
            <p className="mt-1 text-sm">Blood Groups</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-white">24×7</p>
            <p className="mt-1 text-sm">Emergency Access</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="mt-1 text-sm">Secure Workflow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
