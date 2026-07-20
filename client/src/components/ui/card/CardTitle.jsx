import { cn } from '../../../utils/cn';

const CardTitle = ({ className, children, ...props }) => {
  return (
    <h2
      className={cn(
        `
        text-2xl
        font-bold
        tracking-tight
        text-slate-900
        dark:text-white
        `,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default CardTitle;
