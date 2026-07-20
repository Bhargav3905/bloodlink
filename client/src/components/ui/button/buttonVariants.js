import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow-lg',

        secondary: 'bg-slate-700 text-white hover:bg-slate-800',

        outline:
          'border border-slate-300 bg-white text-slate-900 shadow-sm hover:bg-slate-100 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800',

        ghost:
          'border border-transparent text-slate-700 hover:bg-slate-100 hover:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:border-slate-700',

        success: 'bg-emerald-600 text-white hover:bg-emerald-700',

        warning: 'bg-amber-500 text-white hover:bg-amber-600',

        danger: 'bg-red-700 text-white hover:bg-red-800',
      },

      size: {
        sm: 'h-9 px-3 text-sm',

        md: 'h-11 px-5 text-base',

        lg: 'h-12 px-6 text-lg',
      },

      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
