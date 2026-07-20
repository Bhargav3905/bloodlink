import { Inbox } from 'lucide-react';

const EmptyState = ({
  title = 'No Data Available',
  description = 'There is nothing to display right now.',
  icon: Icon = Inbox,
  action,
}) => {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-white to-slate-50 px-8 py-16 text-center shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
        <Icon size={44} className="text-red-600" />
      </div>

      <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500 dark:text-slate-400">
        {description}
      </p>

      {action && <div className="mt-8 flex justify-center">{action}</div>}
    </div>
  );
};

export default EmptyState;
