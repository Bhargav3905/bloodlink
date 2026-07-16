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
        h-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-red-200
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-red-800
        ${clickable ? 'cursor-pointer' : ''}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </h2>

          {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}
        </div>

        {Icon && (
          <div
            className={`
              rounded-2xl
              p-4
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-6
              ${iconBg}
            `}
          >
            <Icon size={26} className={iconColor} />
          </div>
        )}
      </div>

      {clickable && (
        <div className="mt-6 flex items-center justify-end text-sm font-medium text-red-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Open
          <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );
};

export default DashboardStatCard;
