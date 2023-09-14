import Protected from 'components/globals/protected';
import AuthLayout from 'layouts/authLayout';
import BusinessLayout from 'layouts/authLayout/BusinessLayout';
import CandidateLayout from 'layouts/authLayout/CandidateLayout';
import NBNSLayout from 'layouts/authLayout/NBNSLayout';
import NCCLayout from 'layouts/authLayout/NCCLayout';
import MainLayout from 'layouts/dashboardLayout';
import Dashboard from 'pages/private';
import NotFound from 'pages/public/misc/NotFound';
import { Route, Routes } from 'react-router-dom';
import AuthRoutes from './authRoutes';
import { businessRoute } from './authRoutes/BusinessRoute';
import { candidateRoute } from './authRoutes/CandidateRoute';
import { nbnsRoutes } from './authRoutes/NBNSRoute';
import { nccRoute } from './authRoutes/NCCRoute';
import DashboardRoutes from './dashboardRoutes';

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        {AuthRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Route>
      <Route path="/" element={<CandidateLayout />}>
        {candidateRoute.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Route>
      <Route path="/" element={<BusinessLayout />}>
        {businessRoute.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Route>

      <Route path="/" element={<NCCLayout />}>
        {nccRoute.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Route>
      <Route path="/" element={<NBNSLayout />}>
        {nbnsRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Route>

      <Route
        path="/dashboard"
        element={
          <Protected>
            <MainLayout />
          </Protected>
        }>
        <Route index element={<Dashboard />} />
        {DashboardRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} element={component} />;
        })}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteList;
