import NotFound from 'pages/public/misc/NotFound';
import { Route, Routes } from 'react-router-dom';
import AuthRoutes from './authRoutes';
import { nbnsRoutes } from './authRoutes/NBNSRoute';
import { nccRoute } from './authRoutes/NCCRoute';
import { candidateRoute } from './authRoutes/CandidateRoute';
import DashboardRoutes from './dashboardRoutes';

const RouteList = () => {
  const routeList = [
    ...AuthRoutes,
    ...DashboardRoutes,
    ...candidateRoute,
    ...nccRoute,
    ...nbnsRoutes
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
