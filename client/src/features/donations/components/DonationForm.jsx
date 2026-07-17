import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>Donation Details</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Registered Blood Group</label>

              <input
                value={user?.bloodGroup}
                disabled
                className="h-11 w-full rounded-xl border border-slate-300 bg-slate-100 px-4 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Role</label>

              <input
                value={user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                disabled
                className="h-11 w-full rounded-xl border border-slate-300 bg-slate-100 px-4 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Hidden field submitted to backend */}
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
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300">
              Donors can donate only <strong>1 blood unit</strong> every <strong>90 days</strong>.
            </div>
          )}

          {user?.role === 'hospital' && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300">
              Hospitals can donate between <strong>1 and 10 blood units</strong> of their registered
              blood group in a single donation.
            </div>
          )}

          <Button type="submit" loading={isSubmitting}>
            Record Donation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
