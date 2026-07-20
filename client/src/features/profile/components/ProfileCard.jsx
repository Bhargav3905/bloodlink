import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { User, Pencil, Save, X } from 'lucide-react';

import Button from '../../../components/ui/button/Button';
import FormField from '../../../components/ui/input/FormField';

import { cityOptions } from '../../../constants/cities';

const ProfileCard = ({ user, loading, editing, onEdit, onCancel, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName,
        phone: user.phone,
        city: user.city,
      });
    }
  }, [user, reset]);

  if (!user) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}

      <div className="border-b border-slate-200 bg-gradient-to-r from-red-600 to-rose-600 px-8 py-8 text-white dark:border-slate-800">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
              <User size={38} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">{user.fullName}</h2>

              <p className="mt-1 text-red-100">Manage your account information</p>
            </div>
          </div>

          {!editing && (
            <Button onClick={onEdit} className="gap-2 bg-white text-red-600 hover:bg-red-50">
              <Pencil size={16} />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 p-8 md:grid-cols-2">
        <FormField
          label="Full Name"
          name="fullName"
          register={register}
          disabled={!editing}
          error={errors.fullName}
          rules={{
            required: 'Full name is required',
          }}
        />

        <FormField
          label="Phone Number"
          name="phone"
          register={register}
          disabled={!editing}
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
          disabled={!editing}
          options={cityOptions}
          error={errors.city}
        />

        <FormField label="Email" value={user.email} disabled />

        <FormField label="Blood Group" value={user.bloodGroup} disabled />

        <FormField label="Role" value={user.role} disabled />

        {editing && (
          <div className="col-span-full mt-2 flex justify-end gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
            <Button
              type="button"
              variant="outline"
              className="gap-2"
              onClick={() => {
                reset({
                  fullName: user.fullName,
                  phone: user.phone,
                  city: user.city,
                });

                clearErrors();
                onCancel();
              }}
            >
              <X size={16} />
              Cancel
            </Button>

            <Button type="submit" loading={loading || isSubmitting} className="gap-2">
              <Save size={16} />
              Save Changes
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileCard;
