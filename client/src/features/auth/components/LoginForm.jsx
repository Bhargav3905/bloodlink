import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Button } from '../../../components/ui/button';
import { FormField } from '../../../components/ui/input';

import authService from '../services/auth.service';
import getApiError from '../../../utils/apiError';

import { ROUTES } from '../../../constants/routes';
import { useAuth } from '../../../contexts/AuthContext';

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
      const user = response.data.user;
      login(user);

      toast.success(response.message);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
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
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Remember me
        </label>

        <Link
          to={ROUTES.FORGOT_PASSWORD}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <Button type="submit" fullWidth loading={isSubmitting}>
        Sign In
      </Button>

      <p className="text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <Link to={ROUTES.REGISTER} className="font-semibold text-red-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
