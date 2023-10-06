import BusinessNcc from 'components/locals/NCC/NccSite/Business';
import CandidateSiteSingleNcc from 'components/locals/NCC/NccSite/CandidateSingle';
import SingleBusiness from 'components/locals/NCC/NccSite/SingleBusiness';
import AboutPage from 'pages/public/nccSite/About';
import CandidatePage from 'pages/public/nccSite/Candidate';
import CommitteePage from 'pages/public/nccSite/Committee';
import Contact from 'pages/public/nccSite/Contact';
import EventsPage from 'pages/public/nccSite/Events';
import MissionPage from 'pages/public/nccSite/Mission';
import NccSitePage from 'pages/public/nccSite/NccSite';
import News from 'pages/public/nccSite/News';
import ProfilePage from 'pages/public/nccSite/Profile';
import SingleEventNCC from 'pages/public/nccSite/SingleEvent';
import SingleNewsNCC from 'pages/public/nccSite/SingleNews';
import TabComponentPage from 'pages/public/nccSite/TabComponentPage';
import VisionPage from 'pages/public/nccSite/Vision';

export const nccRoute = [
  {
    path: '/ncc/:ncc',
    component: <NccSitePage />
  },
  {
    path: '/ncc/:ncc/about',
    component: <AboutPage />
  },
  {
    path: '/ncc/:ncc/candidate',
    component: <CandidatePage />
  },
  {
    path: '/ncc/:ncc/candidate/:slug',
    component: <CandidateSiteSingleNcc />
  },
  {
    path: '/ncc/:ncc/mission',
    component: <MissionPage />
  },
  {
    path: '/ncc/:ncc/vision',
    component: <VisionPage />
  },
  {
    path: '/ncc/:ncc/news',
    component: <News />
  },
  {
    path: '/ncc/:ncc/news/:slug',
    component: <SingleNewsNCC />
  },
  {
    path: '/ncc/:ncc/business',
    component: <BusinessNcc />
  },
  {
    path: '/ncc/:ncc/business/:slug',
    component: <SingleBusiness />
  },
  {
    path: '/ncc/:ncc/contact',
    component: <Contact />
  },
  {
    path: '/ncc/:ncc/committee',
    component: <CommitteePage />
  },
  {
    path: '/ncc/:ncc/committee/:username',
    component: <ProfilePage />
  },
  {
    path: '/ncc/:ncc/events',
    component: <EventsPage />
  },
  {
    path: '/ncc/:ncc/events/:slug',
    component: <SingleEventNCC />
  },
  {
    path: `ncc/:ncc/:slug`,
    component: <TabComponentPage />
  }
];
