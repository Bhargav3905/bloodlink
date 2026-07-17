import { useEffect, useState } from 'react';

import authService from '../features/auth/services/auth.service';

import AuthContext from './auth-context';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = setUser;

  const logout = async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  };

  const restoreSession = async () => {
    try {
      const response = await authService.refreshSession();

      setUser(response.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void restoreSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        restoreSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
