import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import useAuth from '../../../hooks/useAuth';

import FormField from '../../../components/ui/input/FormField';
import Button from '../../../components/ui/button/Button';

import requestService from '../services/request.service';

import { bloodGroupOptions } from '../../../constants/bloodGroups';
import { ROLES } from '../../../constants/roles';

import getApiError from '../../../utils/apiError';

const PROCESSING_FEE = 500;

const RequestForm = ({ onSuccess }) => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      bloodGroup: user?.role === ROLES.PATIENT ? user.bloodGroup : '',
      quantity: 1,
    },
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        quantity: Number(data.quantity),
      };

      const response = await requestService.createRequest(payload);
      toast.success(response.message);

      reset({
        bloodGroup: user?.role === ROLES.PATIENT ? user.bloodGroup : '',
        quantity: 1,
      });

      onSuccess?.();
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-bold">Create Blood Request</h2>

      <p className="mt-2 text-slate-500">Processing Fee: ₹{PROCESSING_FEE}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        {user?.role === ROLES.PATIENT ? (
          <FormField label="Blood Group" value={user.bloodGroup} disabled />
        ) : (
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
        )}

        <FormField
          label="Quantity"
          type="number"
          name="quantity"
          register={register}
          required
          error={errors.quantity}
          rules={{
            required: 'Quantity is required',
            min: {
              value: 1,
              message: 'Minimum quantity is 1',
            },
            max: {
              value: user?.role === ROLES.PATIENT ? 2 : 5,
              message:
                user?.role === ROLES.PATIENT
                  ? 'Maximum 2 units allowed'
                  : 'Maximum 5 units allowed',
            },
          }}
        />

        <Button type="submit" loading={isSubmitting}>
          Create Request
        </Button>
      </form>
    </div>
  );
};

export default RequestForm;
