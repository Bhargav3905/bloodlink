import { useEffect, useState } from 'react';

import SidebarContext from '../contexts/SidebarContext';

const STORAGE_KEY = 'sidebar-collapsed';

const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(() => {
    const value = localStorage.getItem(STORAGE_KEY);

    return value ? JSON.parse(value) : false;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collapsed));
  }, [collapsed]);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
