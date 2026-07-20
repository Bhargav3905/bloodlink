import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../../../components/ui/button/Button';
import FormField from '../../../components/ui/input/FormField';

import authService from '../services/auth.service';
import getApiError from '../../../utils/apiError';

import { ROUTES } from '../../../constants/routes';

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await authService.forgotPassword(data);

      toast.success(response.message);
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
        placeholder="Enter your registered email"
        register={register}
        required
        error={errors.email}
        rules={{
          required: 'Email is required',
        }}
      />

      <Button type="submit" fullWidth loading={isSubmitting} className="h-12">
        Send Reset Link
      </Button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs uppercase tracking-wider text-slate-400 dark:bg-slate-900">
            Password Recovery
          </span>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Remember your password?{' '}
        <Link
          to={ROUTES.LOGIN}
          className="font-semibold text-red-600 transition hover:text-red-700"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
