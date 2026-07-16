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
  INVENTORY: '/inventory',  // Admin - Hospital

  // Admin
  ADMIN_DASHBOARD: '/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_REQUESTS: '/admin/requests',
  ADMIN_ANALYTICS: '/admin/analytics',
  DONATIONS: '/donations',

  // Donor
  DONOR_DASHBOARD: '/dashboard',
  DONOR_DONATIONS: '/donor/donate',
  DONOR_HISTORY: '/donor/history',

  // Patient
  PATIENT_DASHBOARD: '/dashboard',
  PATIENT_REQUESTS: '/patient/requests',

  // Hospital
  HOSPITAL_DASHBOARD: '/dashboard',
  HOSPITAL_REQUESTS: '/hospital/requests',
};
