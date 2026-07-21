import AuthBranding from './AuthBranding';
import AuthWrapper from './AuthWrapper';

const AuthLayout = ({ children }) => {
  return (
    <AuthWrapper>
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <div className="grid min-h-[720px] lg:grid-cols-2">
          
          <div className="hidden lg:flex">
            <AuthBranding />
          </div>

          <div className="flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-white p-10 md:p-14 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default AuthLayout;
