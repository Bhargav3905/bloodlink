import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Droplets, HeartHandshake, Building2, Info } from 'lucide-react';

import useAuth from '../../../hooks/useAuth';

import Card from '../../../components/ui/card/Card';
import CardContent from '../../../components/ui/card/CardContent';
import CardHeader from '../../../components/ui/card/CardHeader';
import CardTitle from '../../../components/ui/card/CardTitle';
import FormField from '../../../components/ui/input/FormField';
import Button from '../../../components/ui/button/Button';

import donationService from '../services/donation.service';

import getApiError from '../../../utils/apiError';

const DonationForm = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      bloodGroup: user?.bloodGroup || '',
      quantity: user?.role === 'donor' ? 1 : '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        bloodGroup: data.bloodGroup,
        quantity: user.role === 'donor' ? 1 : Number(data.quantity),
      };

      const response = await donationService.createDonation(payload);

      toast.success(response.message);

      reset({
        bloodGroup: user.bloodGroup,
        quantity: user.role === 'donor' ? 1 : '',
      });
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <Card className="mx-auto max-w-3xl rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800">
      <CardHeader className="border-b border-slate-200 dark:border-slate-800">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <HeartHandshake className="text-red-600" size={26} />
          Donation Details
        </CardTitle>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Verify your registered details before recording a blood donation.
        </p>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-3 flex items-center gap-2 text-red-600">
                <Droplets size={18} />
                <span className="text-sm font-semibold">Registered Blood Group</span>
              </div>

              <input
                value={user?.bloodGroup}
                disabled
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 font-medium dark:border-slate-700 dark:bg-slate-900"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-3 flex items-center gap-2 text-red-600">
                <Building2 size={18} />
                <span className="text-sm font-semibold">Account Role</span>
              </div>

              <input
                value={user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                disabled
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 font-medium dark:border-slate-700 dark:bg-slate-900"
              />
            </div>
          </div>

          <input type="hidden" value={user?.bloodGroup} {...register('bloodGroup')} />

          <FormField
            label="Quantity (Units)"
            type="number"
            name="quantity"
            register={register}
            disabled={user?.role === 'donor'}
            error={errors.quantity}
            required={user?.role === 'hospital'}
            rules={{
              required: user?.role === 'hospital' ? 'Quantity is required' : false,
              min: {
                value: 1,
                message: 'Minimum quantity is 1',
              },
              max: {
                value: 10,
                message: 'Maximum 10 units allowed',
              },
            }}
          />

          {user?.role === 'donor' && (
            <div className="flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
              <Info size={20} className="mt-0.5 shrink-0 text-blue-600" />

              <p className="text-sm leading-7 text-blue-700 dark:text-blue-300">
                Donors can donate only <strong>1 blood unit</strong> every <strong>90 days</strong>{' '}
                to ensure safe and healthy blood donation.
              </p>
            </div>
          )}

          {user?.role === 'hospital' && (
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
              <Info size={20} className="mt-0.5 shrink-0 text-emerald-600" />

              <p className="text-sm leading-7 text-emerald-700 dark:text-emerald-300">
                Hospitals can donate between <strong>1 and 10 blood units</strong> of their
                registered blood group in a single donation.
              </p>
            </div>
          )}

          <div className="flex justify-end border-t border-slate-200 pt-6 dark:border-slate-800">
            <Button type="submit" loading={isSubmitting} className="min-w-44">
              Record Donation
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
