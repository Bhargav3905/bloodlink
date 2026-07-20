import Loader from './Loader';

const PageLoader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
      <Loader size="xl" />

      <p className="mt-6 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
        Loading...
      </p>
    </div>
  );
};

export default PageLoader;
