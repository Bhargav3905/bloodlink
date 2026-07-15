export const ROUTES = {
  // Public
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password/:token',

  // Common
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',

  // Admin
  ADMIN_DASHBOARD: '/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_INVENTORY: '/admin/inventory',
  ADMIN_REQUESTS: '/admin/requests',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_DONATIONS: '/admin/donations',

  // Donor
  DONOR_DASHBOARD: '/dashboard',
  DONOR_DONATIONS: '/donor/donate',
  DONOR_HISTORY: '/donor/history',

  // Patient
  PATIENT_DASHBOARD: '/dashboard',
  PATIENT_REQUESTS: '/patient/requests',

  // Hospital
  HOSPITAL_DASHBOARD: '/dashboard',
  HOSPITAL_INVENTORY: '/hospital/inventory',
  HOSPITAL_REQUESTS: '/hospital/requests',
};
