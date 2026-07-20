import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  gap-1
  rounded-full
  border
  px-3
  py-1
  text-xs
  font-semibold
  tracking-wide
  whitespace-nowrap
  transition-all
  duration-200
  `,
  {
    variants: {
      variant: {
        default:
          'border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200',

        success:
          'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',

        warning:
          'border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-300',

        danger:
          'border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300',

        info: 'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);
