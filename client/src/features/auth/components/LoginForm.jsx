import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../../../components/ui/button/Button';
import FormField from '../../../components/ui/input/FormField';

import authService from '../services/auth.service';
import getApiError from '../../../utils/apiError';

import { ROUTES } from '../../../constants/routes';
import useAuth from '../../../hooks/useAuth';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await authService.login(data);

      login(response.data.user);

      toast.success(response.message);

      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
      <FormField
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email"
        register={register}
        error={errors.email}
        required
        rules={{
          required: 'Email is required',
        }}
      />

      <FormField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        register={register}
        error={errors.password}
        required
        rules={{
          required: 'Password is required',
        }}
      />

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <input
            type="checkbox"
            className="rounded border-slate-300 text-red-600 focus:ring-red-500"
          />
          Remember me
        </label>

        <Link
          to={ROUTES.FORGOT_PASSWORD}
          className="text-sm font-semibold text-red-600 transition hover:text-red-700 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <Button type="submit" fullWidth loading={isSubmitting} className="h-12">
        Sign In
      </Button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs uppercase tracking-wider text-slate-400 dark:bg-slate-900">
            Secure Login
          </span>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Don't have an account?{' '}
        <Link
          to={ROUTES.REGISTER}
          className="font-semibold text-red-600 transition hover:text-red-700"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
