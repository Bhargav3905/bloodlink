import AuthLayout from '../components/AuthLayout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
          Welcome Back
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Sign in to your account
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-500 dark:text-slate-400">
          Access your BloodLink dashboard to manage donations, requests and inventory securely.
        </p>

        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
