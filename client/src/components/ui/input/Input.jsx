import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';

const Input = forwardRef(
  ({ className, type = 'text', disabled = false, 'aria-invalid': invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={invalid}
        className={cn(
          'flex h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-900',
          'placeholder:text-slate-400',
          'transition-all duration-200',
          'border-slate-300 shadow-sm',

          // Focus
          'focus:border-red-500 focus:outline-none focus:ring-4 focus:ring-red-500/10',

          // Invalid
          'aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-500/20',

          // Disabled
          'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-70',

          // Dark
          'dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:disabled:bg-slate-800',

          // Autofill
          'autofill:bg-transparent',

          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
