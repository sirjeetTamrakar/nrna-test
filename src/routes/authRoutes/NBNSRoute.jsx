import Homepage from 'pages/public/nbnsSite';
import AboutPage from 'pages/public/nbnsSite/About';
import AdvisePage from 'pages/public/nbnsSite/Advise';
import ContactPage from 'pages/public/nbnsSite/Contact';
import SupportPage from 'pages/public/nbnsSite/Support';
import SurveyPage from 'pages/public/nbnsSite/Survey';

export const nbnsRoutes = [
  {
    path: '/nbns',
    component: <Homepage />
  },
  {
    path: '/nbns/survey',
    component: <SurveyPage />
  },
  {
    path: '/nbns/advise',
    component: <AdvisePage />
  },
  {
    path: '/nbns/support',
    component: <SupportPage />
  },
  {
    path: '/nbns/contact',
    component: <ContactPage />
  },
  {
    path: '/nbns/about',
    component: <AboutPage />
  }
];
