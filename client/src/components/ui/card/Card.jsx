import { cn } from '../../../utils/cn';

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
