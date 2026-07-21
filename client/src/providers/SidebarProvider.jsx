import { useEffect, useState } from 'react';

import SidebarContext from '../contexts/SidebarContext';

const STORAGE_KEY = 'sidebar-collapsed';

const MOBILE_BREAKPOINT = 1024;

const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(() => {
    const value = localStorage.getItem(STORAGE_KEY);

    return value ? JSON.parse(value) : false;
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collapsed));
  }, [collapsed]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setMobileOpen((prev) => !prev);
      return;
    }

    setCollapsed((prev) => !prev);
  };

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        mobileOpen,
        toggleSidebar,
        closeMobileSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
