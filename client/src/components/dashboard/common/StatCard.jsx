const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm text-slate-500">{title}</p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{value}</h2>
    </div>
  );
};

export default StatCard;
