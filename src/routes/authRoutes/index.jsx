import AboutPage from 'pages/public/About';
import BusinessPage from 'pages/public/Business';
import CandidatePage from 'pages/public/Candidate';
import ChnagePasswordDashboard from 'pages/public/changePass';
import ContactPage from 'pages/public/Contact';
import EventsPage from 'pages/public/events';
import SingleEventPage from 'pages/public/events/SingleEvent';
import Forgot from 'pages/public/forgot';
import HomeDataComponentPage from 'pages/public/HomeDataComponentPage';
import { Homepage } from 'pages/public/Homepage';
import MissionPage from 'pages/public/Mission';
import NCCPage from 'pages/public/NCC';
import NewsPage from 'pages/public/news';
import SingleNewsPage from 'pages/public/news/SingleNews';
import OurTeamPage from 'pages/public/OurTeam';
import ResetPassword from 'pages/public/reset';
import VerifyEmail from 'pages/public/verify';
import VisionPage from 'pages/public/Vision';

const AuthRoutes = [
  {
    path: '/',
    component: <Homepage />
  },
  // {
  //   path: '/candidates',
  //   component: <Candidates />
  // },
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
    path: '/candidate',
    component: <CandidatePage />
  },
  {
    path: '/our-team',
    component: <OurTeamPage />
  },
  {
    path: '/business',
    component: <BusinessPage />
  },
  // {
  //   path: '/business/:slug',
  //   component: <SingleBusinessPage />
  // },
  {
    path: '/vision',
    component: <VisionPage />
  },
  {
    path: '/mission',
    component: <MissionPage />
  },
  { path: '/reset-password', component: <ResetPassword /> },
  { path: '/password-reset', component: <ChnagePasswordDashboard /> },
  { path: '/forgot-password', component: <Forgot /> },
  { path: '/verify-mail', component: <VerifyEmail /> },
  {
    path: `/:slug`,
    component: <HomeDataComponentPage />
  }
];

export default AuthRoutes;
