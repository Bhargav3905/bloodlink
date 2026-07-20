import { badgeVariants } from './badgeVariants';
import { cn } from '../../../utils/cn';

const Badge = ({ className, variant, children, ...props }) => {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
