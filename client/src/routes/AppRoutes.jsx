import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import ForgotPassword from '../features/auth/pages/ForgotPassword';
import ResetPassword from '../features/auth/pages/ResetPassword';
import Dashboard from '../pages/Dashboard';

import { ROUTES } from '../constants/routes';
import { ROLES } from '../constants/roles';
import RoleRoute from '../components/auth/RoleRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />

      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />

      <Route
        element={
          <RoleRoute allowedRoles={[ROLES.ADMIN, ROLES.DONOR, ROLES.HOSPITAL, ROLES.PATIENT]} />
        }
      >
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
