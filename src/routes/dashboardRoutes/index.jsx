import Protected from 'components/globals/protected';
import AdvicePage from 'pages/private/Advice';
import BannerPage from 'pages/private/BannerPage';
import CandidatePage from 'pages/private/CandidatePage';
import ContactPage from 'pages/private/ContactPage';
import EventsPage from 'pages/private/EventsPage';
import MemberPage from 'pages/private/MemberPage';
import NCCPage from 'pages/private/NCCPage';
import NewsPage from 'pages/private/NewsPage';
import OurTeamPage from 'pages/private/OurTeamPage';
import ParticipantResultPage from 'pages/private/ParticipantResult';
import ParticipantsPage from 'pages/private/Participants';
import ProfilePage from 'pages/private/ProfilePage';
import QuestionsPage from 'pages/private/Questions';
import ResultsPage from 'pages/private/ResultsPage';
import SiteSettingsPage from 'pages/private/SiteSettings';
import BusinessPage from 'pages/private/business';
import BusinessProfilePage from 'pages/private/business/BusinessProfile';
import CategoryPage from 'pages/private/business/Category';

const DashboardRoutes = [
  {
    path: 'events',
    component: (
      <Protected>
        <EventsPage />
      </Protected>
    )
  },

  {
    path: 'news',
    component: (
      <Protected>
        <NewsPage />
      </Protected>
    )
  },
  {
    path: 'contact',
    component: (
      <Protected>
        <ContactPage />
      </Protected>
    )
  },
  {
    path: 'profile',
    component: (
      <Protected>
        <ProfilePage />
      </Protected>
    )
  },
  {
    path: 'advice',
    component: (
      <Protected>
        <AdvicePage />
      </Protected>
    )
  },
  {
    path: 'ncc',
    component: (
      <Protected>
        <NCCPage />
      </Protected>
    )
  },
  {
    path: 'our-team',
    component: (
      <Protected>
        <OurTeamPage />
      </Protected>
    )
  },
  {
    path: 'candidate',
    component: (
      <Protected>
        <CandidatePage />
      </Protected>
    )
  },
  {
    path: 'survey/site',
    component: (
      <Protected>
        <QuestionsPage />
      </Protected>
    )
  },
  {
    path: 'survey/result',
    component: (
      <Protected>
        <ResultsPage />
      </Protected>
    )
  },
  {
    path: 'survey/participants',
    component: (
      <Protected>
        <ParticipantsPage />
      </Protected>
    )
  },
  {
    path: 'survey/participants/:participant_id',
    component: (
      <Protected>
        <ParticipantResultPage />
      </Protected>
    )
  },

  {
    path: 'business/category',
    component: (
      <Protected>
        <CategoryPage />
      </Protected>
    )
  },
  {
    path: 'business',
    component: (
      <Protected>
        <BusinessPage />
      </Protected>
    )
  },
  {
    path: 'business/:business_id',
    component: (
      <Protected>
        <BusinessProfilePage />
      </Protected>
    )
  },

  {
    path: 'settings/site',
    component: (
      <Protected>
        <SiteSettingsPage />
      </Protected>
    )
  },
  {
    path: 'settings/banner',
    component: (
      <Protected>
        <BannerPage />
      </Protected>
    )
  },
  {
    path: 'user-management/member',
    component: (
      <Protected>
        <MemberPage />
      </Protected>
    )
  }
];

export default DashboardRoutes;
