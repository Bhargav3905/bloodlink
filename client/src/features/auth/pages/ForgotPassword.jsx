import AuthLayout from '../components/AuthLayout';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
          Account Recovery
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Forgot your password?
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-500 dark:text-slate-400">
          Enter your registered email address and we'll send you a secure password reset link.
        </p>

        <div className="mt-10">
          <ForgotPasswordForm />
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
