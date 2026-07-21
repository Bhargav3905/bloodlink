import {
  LayoutDashboard,
  User,
  Heart,
  ClipboardList,
  Package,
  Users,
} from 'lucide-react';

import { ROLES } from './roles';
import { ROUTES } from './routes';

export const SIDEBAR_ITEMS = {
  [ROLES.ADMIN]: [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: ROUTES.ADMIN_DASHBOARD,
    },
    {
      label: 'Pending Users',
      icon: Users,
      path: ROUTES.ADMIN_USERS,
    },
    {
      label: 'Donations',
      icon: Heart,
      path: ROUTES.DONATIONS,
    },
    {
      label: 'Inventory',
      icon: Package,
      path: ROUTES.INVENTORY,
    },
    {
      label: 'Requests',
      icon: ClipboardList,
      path: ROUTES.ADMIN_REQUESTS,
    },
    {
      label: 'Profile',
      icon: User,
      path: ROUTES.PROFILE,
    },
  ],

  [ROLES.DONOR]: [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: ROUTES.DONOR_DASHBOARD,
    },
    {
      label: 'Inventory',
      icon: Package,
      path: ROUTES.INVENTORY,
    },
    {
      label: 'Donate Blood',
      icon: Heart,
      path: ROUTES.DONOR_DONATIONS,
    },
    {
      label: 'Profile',
      icon: User,
      path: ROUTES.PROFILE,
    },
  ],

  [ROLES.PATIENT]: [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: ROUTES.PATIENT_DASHBOARD,
    },
    {
      label: 'Inventory',
      icon: Package,
      path: ROUTES.INVENTORY,
    },
    {
      label: 'Blood Requests',
      icon: ClipboardList,
      path: ROUTES.PATIENT_REQUESTS,
    },
    {
      label: 'Profile',
      icon: User,
      path: ROUTES.PROFILE,
    },
  ],

  [ROLES.HOSPITAL]: [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: ROUTES.HOSPITAL_DASHBOARD,
    },
    {
      label: 'Donate Blood',
      icon: Heart,
      path: ROUTES.DONOR_DONATIONS,
    },
    {
      label: 'Inventory',
      icon: Package,
      path: ROUTES.INVENTORY,
    },
    {
      label: 'Blood Requests',
      icon: ClipboardList,
      path: ROUTES.HOSPITAL_REQUESTS,
    },
    {
      label: 'Profile',
      icon: User,
      path: ROUTES.PROFILE,
    },
  ],
};
