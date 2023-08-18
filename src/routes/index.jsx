import MainLayout from 'layouts/dashboardLayout';
import Dashboard from 'pages/private/dashboard';
import NotFound from 'pages/public/misc/NotFound';
import { Route, Routes } from 'react-router-dom';
import AuthRoutes from './authRoutes';
import { candidateRoute } from './authRoutes/candidateRoute';
import { nbnsRoutes } from './authRoutes/NBNSRoute';
import { nccRoute } from './authRoutes/NCCRoute';
import DashboardRoutes from './dashboardRoutes';

const RouteList = () => {
  const routeList = [...AuthRoutes, ...candidateRoute, ...nccRoute, ...nbnsRoutes];

  return (
    <Routes>
      {routeList.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
      <Route path="/dashboard" element={<MainLayout />}>
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
