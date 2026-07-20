import { cn } from '../../../utils/cn';

const sizes = {
  sm: 'h-4 w-4 border-2',
  md: 'h-7 w-7 border-[3px]',
  lg: 'h-11 w-11 border-4',
  xl: 'h-16 w-16 border-4',
};

const Loader = ({ size = 'md', className }) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'inline-block animate-spin rounded-full border-red-600 border-t-transparent',
        sizes[size],
        className
      )}
    />
  );
};

export default Loader;
