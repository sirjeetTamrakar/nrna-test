import ServiceListPage from 'pages/public/businessSite/BusinessList';
import BusinessSitePage from 'pages/public/businessSite/BusinessSite';
import ContactPage from 'pages/public/businessSite/Contact';

export const businessRoute = [
  {
    path: '/business/:slug',
    component: <BusinessSitePage />
  },
  {
    path: '/business/:slug/services',
    component: <ServiceListPage />
  },
  {
    path: '/business/:slug/contact',
    component: <ContactPage />
  }
];
