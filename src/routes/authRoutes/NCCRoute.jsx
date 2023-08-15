import AboutPage from 'pages/public/nccSite/About';
import CommitteePage from 'pages/public/nccSite/Committee';
import Contact from 'pages/public/nccSite/Contact';
import EventsPage from 'pages/public/nccSite/Events';
import MissionPage from 'pages/public/nccSite/Mission';
import NccSitePage from 'pages/public/nccSite/NccSite';
import News from 'pages/public/nccSite/News';
import ProfilePage from 'pages/public/nccSite/Profile';
import SingleEventNCC from 'pages/public/nccSite/SingleEvent';
import SingleNewsNCC from 'pages/public/nccSite/SingleNews';
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
  }
];
