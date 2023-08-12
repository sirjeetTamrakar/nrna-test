import Login from 'pages/public/login';
import NotFound from 'pages/public/misc/NotFound';
import { Route, Routes } from 'react-router-dom';
import AuthRoutes from './authRoutes';
import DashboardRoutes from './dashboardRoutes';

const RouteList = () => {
  const routeList = [
    {
      path: '/',
      component: <Login />
    },

    ...AuthRoutes,
    ...DashboardRoutes
  ];

  return (
    <Routes>
      {routeList.map(({ path, component }) => {
        return <Route key={path} path={path} element={component} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteList;
