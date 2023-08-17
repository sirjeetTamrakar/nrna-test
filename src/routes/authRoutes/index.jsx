import AboutPage from 'pages/public/About';
import BusinessPage from 'pages/public/Business';
import Candidates from 'pages/public/Candidates';
import ContactPage from 'pages/public/Contact';
import { Homepage } from 'pages/public/Homepage';
import MissionPage from 'pages/public/Mission';
import NCCPage from 'pages/public/NCC';
import OurTeamPage from 'pages/public/OurTeam';
import SingleBusinessPage from 'pages/public/SingleBusiness';
import VisionPage from 'pages/public/Vision';
import EventsPage from 'pages/public/events';
import SingleEventPage from 'pages/public/events/SingleEvent';
import Forgot from 'pages/public/forgot';
import NewsPage from 'pages/public/news';
import SingleNewsPage from 'pages/public/news/SingleNews';
import ResetPassword from 'pages/public/reset';
import VerifyEmail from 'pages/public/verify';

const AuthRoutes = [
  {
    path: '/',
    component: <Homepage />
  },
  {
    path: '/candidates',
    component: <Candidates />
  },
  {
    path: '/ncc',
    component: <NCCPage />
  },
  {
    path: '/news',
    component: <NewsPage />
  },
  {
    path: '/news/:slug',
    component: <SingleNewsPage />
  },
  {
    path: '/events',
    component: <EventsPage />
  },
  {
    path: '/events/:slug',
    component: <SingleEventPage />
  },
  {
    path: '/contact',
    component: <ContactPage />
  },
  {
    path: '/about',
    component: <AboutPage />
  },
  {
    path: '/our-team',
    component: <OurTeamPage />
  },
  {
    path: '/business',
    component: <BusinessPage />
  },
  {
    path: '/business/:slug',
    component: <SingleBusinessPage />
  },
  {
    path: '/vision',
    component: <VisionPage />
  },
  {
    path: '/mission',
    component: <MissionPage />
  },

  { path: '/forgot-password', component: <Forgot /> },
  { path: '/reset-password', component: <ResetPassword /> },
  { path: '/verify-mail', component: <VerifyEmail /> }
];

export default AuthRoutes;
