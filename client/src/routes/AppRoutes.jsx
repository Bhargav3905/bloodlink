import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import ForgotPassword from '../features/auth/pages/ForgotPassword';
import ResetPassword from '../features/auth/pages/ResetPassword';
import Users from '../features/users/pages/Users';
import DonateBlood from '../features/donations/pages/DonateBlood';
import DonationHistory from '../features/donations/pages/DonationHistory';

import GuestRoute from '../components/auth/GuestRoute';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import RoleRoute from '../components/auth/RoleRoute';

import { ROUTES } from '../constants/routes';
import { ROLES } from '../constants/roles';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />

      <Route element={<GuestRoute />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />

        <Route element={<RoleRoute allowedRoles={[ROLES.ADMIN]} />}>
          <Route path={ROUTES.ADMIN_USERS} element={<Users />} />
          <Route path={ROUTES.ADMIN_DONATIONS} element={<DonationHistory />} />
        </Route>

        <Route element={<RoleRoute allowedRoles={[ROLES.DONOR, ROLES.HOSPITAL]} />}>
          <Route path={ROUTES.DONOR_DONATIONS} element={<DonateBlood />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
