import Skeleton from './Skeleton';

const SkeletonTable = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      
      <div className="mb-8 flex items-center justify-between">
        <Skeleton className="h-7 w-56 rounded-xl" />

        <Skeleton className="h-10 w-32 rounded-xl" />
      </div>

      <div className="mb-5 grid grid-cols-6 gap-4">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={`header-${index}`} className="h-4 rounded-full" />
        ))}
      </div>

      <div className="space-y-4">
        {[...Array(6)].map((_, row) => (
          <div key={row} className="grid grid-cols-6 gap-4">
            {[...Array(6)].map((_, col) => (
              <Skeleton key={col} className="h-10 rounded-xl" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonTable;
