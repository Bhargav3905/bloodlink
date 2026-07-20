import Skeleton from './Skeleton';

const SkeletonProfile = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="space-y-3">
          <Skeleton className="h-8 w-52 rounded-xl" />

          <Skeleton className="h-4 w-72 rounded-full" />
        </div>

        <Skeleton className="h-11 w-36 rounded-xl" />
      </div>

      {/* Form */}
      <div className="grid gap-6 md:grid-cols-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-24 rounded-full" />

            <Skeleton className="h-11 w-full rounded-xl" />
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="mt-10 flex justify-end gap-3">
        <Skeleton className="h-11 w-32 rounded-xl" />

        <Skeleton className="h-11 w-36 rounded-xl" />
      </div>
    </div>
  );
};

export default SkeletonProfile;
