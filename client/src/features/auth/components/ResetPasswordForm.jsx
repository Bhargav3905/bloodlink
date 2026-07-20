import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../../../components/ui/button/Button';
import FormField from '../../../components/ui/input/FormField';

import authService from '../services/auth.service';
import getApiError from '../../../utils/apiError';

import { ROUTES } from '../../../constants/routes';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      const response = await authService.resetPassword({
        token,
        password: data.password,
      });

      toast.success(response.message);

      navigate(ROUTES.LOGIN);
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
      <FormField
        label="New Password"
        type="password"
        name="password"
        placeholder="Enter your new password"
        register={register}
        required
        error={errors.password}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Minimum 8 characters',
          },
        }}
      />

      <FormField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your new password"
        register={register}
        required
        error={errors.confirmPassword}
        rules={{
          required: 'Please confirm your password',
          validate: (value) => value === password || 'Passwords do not match',
        }}
      />

      <Button type="submit" fullWidth loading={isSubmitting} className="h-12">
        Reset Password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
