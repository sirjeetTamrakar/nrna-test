import ServiceListPage from 'pages/public/businessSite/BusinessList';
import BusinessSitePage from 'pages/public/businessSite/BusinessSite';

export const businessRoute = [
  {
    path: '/business/:slug',
    component: <BusinessSitePage />
  },
  {
    path: '/business/:slug/services',
    component: <ServiceListPage />
  }
];
