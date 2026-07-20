import { cn } from '../../../utils/cn';

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        `
        space-y-3
        border-b
        border-slate-200
        p-8
        dark:border-slate-800
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardHeader;
