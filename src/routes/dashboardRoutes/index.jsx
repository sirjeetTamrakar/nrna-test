import Events from 'components/locals/dashboard/Events';
import NewsPage from 'pages/public/news';

const DashboardRoutes = [
  {
    path: 'events',
    component: (
      // <Protected>
      <Events />
      // </Protected>
    )
  },

  {
    path: 'news',
    component: (
      // <Protected>
      <NewsPage />
      // </Protected>
    )
  }
];

export default DashboardRoutes;
