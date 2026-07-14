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
      path: '/admin/users',
    },
    {
      label: 'Inventory',
      icon: Package,
      path: '/admin/inventory',
    },
    {
      label: 'Requests',
      icon: ClipboardList,
      path: '/admin/requests',
    },
    {
      label: 'Analytics',
      icon: BarChart3,
      path: '/admin/analytics',
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
      path: '/donor/donate',
    },
    {
      label: 'Donation History',
      icon: ClipboardList,
      path: '/donor/history',
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
      path: '/patient/requests',
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
      label: 'Inventory',
      icon: Package,
      path: '/hospital/inventory',
    },
    {
      label: 'Blood Requests',
      icon: ClipboardList,
      path: '/hospital/requests',
    },
    {
      label: 'Profile',
      icon: User,
      path: ROUTES.PROFILE,
    },
  ],
};
