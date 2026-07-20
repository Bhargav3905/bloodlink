import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import SidebarProvider from '../providers/SidebarProvider';

import { Toaster } from 'react-hot-toast';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SidebarProvider>
          {children}

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 3000,
            }}
          />
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
