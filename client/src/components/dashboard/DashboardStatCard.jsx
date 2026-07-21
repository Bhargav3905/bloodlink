import { ChevronRight } from 'lucide-react';

const DashboardStatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg = 'bg-red-100 dark:bg-red-900/30',
  iconColor = 'text-red-600',
  onClick,
}) => {
  const clickable = typeof onClick === 'function';

  return (
    <div
      onClick={onClick}
      className={`
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-red-300
        hover:bg-red-50/40
        hover:shadow-2xl
        dark:border-slate-800/80
        dark:bg-slate-900
        dark:hover:border-red-800
        dark:hover:bg-slate-800/40
        ${clickable ? 'cursor-pointer' : ''}
      `}
    >

      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{subtitle}</p>
          )}
        </div>

        {Icon && (
          <div
            className={`
              flex h-16 w-16 items-center justify-center
              rounded-2xl
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:rotate-3
              ${iconBg}
            `}
          >
            <Icon size={30} className={iconColor} />
          </div>
        )}
      </div>

      {clickable && (
        <div className="mt-7 flex items-center justify-end text-sm font-semibold text-red-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
          View Details
          <ChevronRight
            size={16}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardStatCard;
