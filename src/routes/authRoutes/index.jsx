import BusinessDataComponent from 'components/locals/Business/BusinessDataComponent';
import BusinessItemOneSingle from 'components/locals/Business/BusinessItemOneSingle';
import NccDataComponent from 'components/locals/NCC/NccSite/NccDataCompnent';
import NccItemOneSingle from 'components/locals/NCC/NccSite/NccItemSingleOne';
import AboutPage from 'pages/public/About';
import BusinessPage from 'pages/public/Business';
import CandidatePage from 'pages/public/Candidate';
import CandidateSiteSingleHome from 'pages/public/CandidateSingle';
import ChnagePasswordDashboard from 'pages/public/changePass';
import CompleteRegistrationPage from 'pages/public/completeRegistrationPage';
import ContactPage from 'pages/public/Contact';
import DownloadPage from 'pages/public/Download';
import EventsPage from 'pages/public/events';
import SingleEventPage from 'pages/public/events/SingleEvent';
import Forgot from 'pages/public/forgot';
import HomeDataComponentPage from 'pages/public/HomeDataComponentPage';
import HomepageFEA from 'pages/public/Homepage';
import MissionPage from 'pages/public/Mission';
import Homepage from 'pages/public/nbnsSite';
import NCCPage from 'pages/public/NCC';
import NewsPage from 'pages/public/news';
import SingleNewsPage from 'pages/public/news/SingleNews';
import OurTeamPage from 'pages/public/OurTeam';
import PrivacyPolicyPage from 'pages/public/PrivacyPolicyPage';
import ResetPassword from 'pages/public/reset';
import SingleDownloadPage from 'pages/public/SingleDownload';
import TermsAndConditionsPage from 'pages/public/TermsAndConditionsPage';
import VerifyEmail from 'pages/public/verify';
import VisionPage from 'pages/public/Vision';

const AuthRoutes = [
  {
    path: '/',
    component: <Homepage />
  },
  {
    path: '/foreign-employment',
    component: <HomepageFEA />
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
    path: '/privacy-policy',
    component: <PrivacyPolicyPage />
  },
  {
    path: '/terms-and-conditions',
    component: <TermsAndConditionsPage />
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
    path: '/foreign-employment/contact',
    component: <ContactPage />
  },
  {
    path: '/foreign-employment/about',
    component: <AboutPage />
  },
  {
    path: '/foreign-employment/candidate',
    component: <CandidatePage />
  },
  {
    path: '/nrna/business',
    component: <BusinessItemOneSingle />
  },
  {
    path: '/nrna/ncc',
    component: <NccItemOneSingle />
  },
  {
    path: '/nrna/business/:slug',
    component: <BusinessDataComponent />
  },
  {
    path: '/nrna/ncc/:slug',
    component: <NccDataComponent />
  },
  {
    path: '/candidate/:slug',
    component: <CandidateSiteSingleHome />
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
  { path: '/complete_registration', component: <CompleteRegistrationPage /> },
  { path: '/password-reset', component: <ChnagePasswordDashboard /> },
  { path: '/forgot-password', component: <Forgot /> },
  { path: '/verify-mail', component: <VerifyEmail /> },
  // {
  //   path: '/:slug',
  //   component: <CandidateSiteSingleHome />
  // },
  {
    path: `/foreign-employment/:slug`,
    component: <HomeDataComponentPage />
  },
  {
    path: '/foreign-employment/download',
    component: <DownloadPage />
  },

  {
    path: '/foreign-employment/download/:slug',
    component: <SingleDownloadPage />
  }
];

export default AuthRoutes;
