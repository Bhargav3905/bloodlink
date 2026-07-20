import { Link, useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../../../components/ui/button/Button';
import FormField from '../../../components/ui/input/FormField';

import { bloodGroupOptions } from '../../../constants/bloodGroups';
import { cityOptions } from '../../../constants/cities';
import { roleOptions } from '../../../constants/roles';
import { ROUTES } from '../../../constants/routes';

import authService from '../services/auth.service';
import getApiError from '../../../utils/apiError';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = useWatch({
    control,
    name: 'password',
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await authService.register(data);

      toast.success(response.message);

      navigate(ROUTES.LOGIN);
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5">
      <FormField
        label="Full Name"
        name="fullName"
        register={register}
        placeholder="Enter your full name"
        required
        error={errors.fullName}
        rules={{
          required: 'Full name is required',
        }}
      />

      <FormField
        label="Email Address"
        type="email"
        name="email"
        register={register}
        placeholder="Enter your email"
        required
        error={errors.email}
        rules={{
          required: 'Email is required',
        }}
      />

      <FormField
        label="Phone Number"
        name="phone"
        register={register}
        placeholder="Enter your phone number"
        required
        error={errors.phone}
        rules={{
          required: 'Phone number is required',
        }}
      />

      <FormField
        label="City"
        type="select"
        name="city"
        register={register}
        options={cityOptions}
        required
        error={errors.city}
        rules={{
          required: 'City is required',
        }}
      />

      <FormField
        label="Blood Group"
        type="select"
        name="bloodGroup"
        register={register}
        options={bloodGroupOptions}
        required
        error={errors.bloodGroup}
        rules={{
          required: 'Blood group is required',
        }}
      />

      <FormField
        label="Role"
        type="select"
        name="role"
        register={register}
        options={roleOptions}
        required
        error={errors.role}
        rules={{
          required: 'Role is required',
        }}
      />

      <FormField
        label="Password"
        type="password"
        name="password"
        register={register}
        placeholder="Create a password"
        required
        error={errors.password}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
      />

      <FormField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        register={register}
        placeholder="Confirm your password"
        required
        error={errors.confirmPassword}
        rules={{
          required: 'Please confirm your password',
          validate: (value) => value === password || 'Passwords do not match',
        }}
      />

      <Button type="submit" fullWidth loading={isSubmitting} className="h-12">
        Create Account
      </Button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs uppercase tracking-wider text-slate-400 dark:bg-slate-900">
            Secure Registration
          </span>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Already have an account?{' '}
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

export default RegisterForm;
