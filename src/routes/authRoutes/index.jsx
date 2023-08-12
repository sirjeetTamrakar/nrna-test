import { Homepage } from 'pages/public/Homepage';
import Forgot from 'pages/public/forgot';
import Login from 'pages/public/login';
import ResetPassword from 'pages/public/reset';
import VerifyEmail from 'pages/public/verify';

const AuthRoutes = [
  {
    path: '/login',
    component: <Login />
  },
  {
    path: '/',
    component: <Homepage />
  },
  { path: '/forgot-password', component: <Forgot /> },
  { path: '/reset-password', component: <ResetPassword /> },
  { path: '/verify-mail', component: <VerifyEmail /> }
];

export default AuthRoutes;
