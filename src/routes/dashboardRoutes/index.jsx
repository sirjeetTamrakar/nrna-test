import Events from 'components/locals/dashboard/Events';
import AdvicePage from 'pages/private/dashboard/Advice';
import BannerPage from 'pages/private/dashboard/BannerPage';
import CandidatePage from 'pages/private/dashboard/CandidatePage';
import ContactPage from 'pages/private/dashboard/ContactPage';
import MemberPage from 'pages/private/dashboard/MemberPage';
import NCCPage from 'pages/private/dashboard/NCCPage';
import NewsPage from 'pages/private/dashboard/NewsPage';
import OurTeamPage from 'pages/private/dashboard/OurTeamPage';
import ProfilePage from 'pages/private/dashboard/ProfilePage';
import QuestionsPage from 'pages/private/dashboard/Questions';
import ResultsPage from 'pages/private/dashboard/ResultsPage';
import SiteSettingsPage from 'pages/private/dashboard/SiteSettings';

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
  },
  {
    path: 'contact',
    component: (
      // <Protected>
      <ContactPage />
      // </Protected>
    )
  },
  {
    path: 'profile',
    component: (
      // <Protected>
      <ProfilePage />
      // </Protected>
    )
  },
  {
    path: 'advice',
    component: (
      // <Protected>
      <AdvicePage />
      // </Protected>
    )
  },
  {
    path: 'ncc',
    component: (
      // <Protected>
      <NCCPage />
      // </Protected>
    )
  },
  {
    path: 'our-team',
    component: (
      // <Protected>
      <OurTeamPage />
      // </Protected>
    )
  },
  {
    path: 'candidate',
    component: (
      // <Protected>
      <CandidatePage />
      // </Protected>
    )
  },
  {
    path: 'survey/site',
    component: (
      // <Protected>
      <QuestionsPage />
      // </Protected>
    )
  },
  {
    path: 'survey/result',
    component: (
      // <Protected>
      <ResultsPage />
      // </Protected>
    )
  },
  {
    path: 'settings/site',
    component: (
      // <Protected>
      <SiteSettingsPage />
      // </Protected>
    )
  },
  {
    path: 'settings/banner',
    component: (
      // <Protected>
      <BannerPage />
      // </Protected>
    )
  },
  {
    path: 'user-management/member',
    component: (
      // <Protected>
      <MemberPage />
      // </Protected>
    )
  }
];

export default DashboardRoutes;
