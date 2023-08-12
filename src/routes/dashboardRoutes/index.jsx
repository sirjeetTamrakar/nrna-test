import Protected from 'components/globals/protected';
import Dashboard from 'pages/private/dashboard';

const DashboardRoutes = [
  {
    path: '/dashboard',
    component: (
      <Protected>
        <Dashboard />
      </Protected>
    )
  }
];

export default DashboardRoutes;
