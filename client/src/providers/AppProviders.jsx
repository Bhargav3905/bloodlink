import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';

import { Toaster } from 'react-hot-toast';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
        <AuthProvider>
          {children}

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 3000,
            }}
          />
        </AuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;