import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ClipboardPlus, Droplets, IndianRupee, Info } from 'lucide-react';

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
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div className="border-b border-slate-200 p-8 dark:border-slate-800">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <ClipboardPlus size={16} />
              Request Form
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Create Blood Request
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Submit a blood request for approval. Payment is required only after approval.
            </p>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 dark:border-red-900 dark:bg-red-950/30">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <IndianRupee size={18} />

              <span className="text-sm font-semibold">Processing Fee</span>
            </div>

            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              ₹{PROCESSING_FEE}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-8">
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
          label="Quantity (Units)"
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

        <div className="flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
          <Info size={20} className="mt-0.5 shrink-0 text-blue-600" />

          <p className="text-sm leading-7 text-blue-700 dark:text-blue-300">
            Your request will follow this workflow:
            <strong> Pending → Admin Approval → Payment → Blood Issued</strong>. Inventory is
            deducted only after successful payment verification.
          </p>
        </div>

        <div className="flex justify-end border-t border-slate-200 pt-6 dark:border-slate-800">
          <Button type="submit" loading={isSubmitting} className="min-w-44 gap-2">
            <Droplets size={18} />
            Create Request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
