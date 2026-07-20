import AuthLayout from '../components/AuthLayout';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
          Join BloodLink
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Create your account
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-500 dark:text-slate-400">
          Register to securely donate blood, request blood, manage inventory and access your
          personalized dashboard.
        </p>

        <div className="mt-10">
          <RegisterForm />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
