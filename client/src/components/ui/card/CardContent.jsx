import { cn } from '../../../utils/cn';

const CardContent = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        `
        p-8
        pt-6
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContent;
