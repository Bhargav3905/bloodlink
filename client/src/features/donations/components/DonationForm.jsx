import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useAuth } from '../../../contexts/AuthContext';

import Card from '../../../components/ui/card/Card';
import CardContent from '../../../components/ui/card/CardContent';
import CardHeader from '../../../components/ui/card/CardHeader';
import CardTitle from '../../../components/ui/card/CardTitle';
import FormField from '../../../components/ui/input/FormField';
import Button from '../../../components/ui/button/Button';

import donationService from '../services/donation.service';

import { bloodGroupOptions } from '../../../constants/bloodGroups';
import getApiError from '../../../utils/apiError';

const DonationForm = () => {
  const { user } = useAuth();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      bloodGroup: user?.bloodGroup || '',
      quantity: user?.role === 'donor' ? 1 : '',
    },
  });

  const bloodGroup = useWatch({
    control,
    name: 'bloodGroup',
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
          <FormField
            label="Blood Group"
            type="select"
            name="bloodGroup"
            register={register}
            options={bloodGroupOptions}
            error={errors.bloodGroup}
            required
            disabled
            rules={{
              required: 'Blood group is required',
            }}
          />

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
            }}
          />

          {bloodGroup && bloodGroup !== user?.bloodGroup && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/40">
              Donation blood group must match your registered blood group.
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
