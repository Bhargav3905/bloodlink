import {
  LayoutDashboard,
  User,
  Heart,
  ClipboardList,
  Package,
  BarChart3,
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
      label: 'Users',
      icon: Users,
      path: ROUTES.ADMIN_USERS,
    },
    {
      label: 'Donations',
      icon: Heart,
      path: ROUTES.ADMIN_DONATIONS,
    },
    {
      label: 'Inventory',
      icon: Package,
      path: ROUTES.ADMIN_INVENTORY,
    },
    {
      label: 'Requests',
      icon: ClipboardList,
      path: ROUTES.ADMIN_REQUESTS,
    },
    {
      label: 'Analytics',
      icon: BarChart3,
      path: ROUTES.ADMIN_ANALYTICS,
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
      label: 'Donate Blood',
      icon: Heart,
      path: ROUTES.DONOR_DONATIONS,
    },
    {
      label: 'Donation History',
      icon: ClipboardList,
      path: ROUTES.DONOR_HISTORY,
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
      path: ROUTES.HOSPITAL_INVENTORY,
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
