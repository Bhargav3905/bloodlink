const SkeletonDashboard = () => {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 h-5 w-36 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="h-10 w-72 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="mt-4 h-5 w-96 max-w-full rounded bg-slate-200 dark:bg-slate-700" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="h-40 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />

            <div className="h-10 w-20 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="h-96 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900" />

        <div className="h-96 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900" />
      </div>
    </div>
  );
};

export default SkeletonDashboard;
