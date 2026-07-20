const SkeletonDashboard = () => {
  return (
    <div className="animate-pulse space-y-8">
      {/* Hero */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 h-5 w-36 rounded-full bg-slate-200 dark:bg-slate-700" />

        <div className="h-10 w-72 max-w-full rounded-xl bg-slate-200 dark:bg-slate-700" />

        <div className="mt-5 h-5 w-96 max-w-full rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="space-y-3">
                <div className="h-4 w-24 rounded-full bg-slate-200 dark:bg-slate-700" />

                <div className="h-10 w-20 rounded-xl bg-slate-200 dark:bg-slate-700" />
              </div>

              <div className="h-14 w-14 rounded-2xl bg-slate-200 dark:bg-slate-700" />
            </div>

            <div className="mt-8 h-4 w-24 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-6 h-6 w-48 rounded-full bg-slate-200 dark:bg-slate-700" />

            <div className="h-72 rounded-2xl bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonDashboard;
