import Protected from 'components/globals/protected';
import AdvicePage from 'pages/private/Advice';
import BannerPage from 'pages/private/BannerPage';
import BusinessPage from 'pages/private/business';
import BusinessManagementPage from 'pages/private/business/BusinessManagementPage';
import CategoryPage from 'pages/private/business/Category';
import BusinessContactPage from 'pages/private/business/Contact';
import BusinessSiteSettingsPage from 'pages/private/BusinessSiteSettingsPage';
import BusinessTemplatePage from 'pages/private/BusinessTemplatePage';
import CandidatePage from 'pages/private/CandidatePage';
import ContactPage from 'pages/private/ContactPage';
import DepartmentPage from 'pages/private/Department';
import DownloadPage from 'pages/private/Download';
import EventCategoryPage from 'pages/private/event/Category';
import EventsPage from 'pages/private/event/EventsPage';
import MemberPage from 'pages/private/MemberPage';
import NBNSArticlesPage from 'pages/private/NBNSArticlesPage';
import NBNSBannerPage from 'pages/private/NBNSBanner';
import NBNSFollowersPage from 'pages/private/NBNSFollowersPage';
import NBNSGalleryPage from 'pages/private/NBNSGalleryPage';
import NBNSPage from 'pages/private/NBNSPage';
import NBNSPressReleasePage from 'pages/private/NBNSPressReleasePage';
import NBNSTemplatePage from 'pages/private/NBNSTemplatePage';
import NCCPage from 'pages/private/NCCPage';
import NccSiteSettingsPage from 'pages/private/NccSiteSettings';
import AllNewsPage from 'pages/private/news/AllNewsPage';
import NewsCategoryPage from 'pages/private/news/Category';
import NewsManagementPage from 'pages/private/news/NewsManagementPage';
import NewsPage from 'pages/private/news/NewsPage';
import NFEATeamPage from 'pages/private/NFEATeamPage';
import OurTeamPage from 'pages/private/OurTeamPage';
import ParticipantResultPage from 'pages/private/ParticipantResult';
import ParticipantsPage from 'pages/private/Participants';
import ProfilePage from 'pages/private/ProfilePage';
import QuestionsPage from 'pages/private/Questions';
import RegionPage from 'pages/private/RegionPage';
import ResultListPage from 'pages/private/ResultListPage';
import ResultsPage from 'pages/private/ResultsPage';
import SiteSettingsPage from 'pages/private/SiteSettings';
import SurveyListPage from 'pages/private/SurveyList';

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
    path: 'events/category',
    component: (
      <Protected>
        <EventCategoryPage />
      </Protected>
    )
  },
  {
    path: 'news/my-news-list',
    component: (
      <Protected>
        <NewsPage />
      </Protected>
    )
  },

  {
    path: 'news/all-news-list',
    component: (
      <Protected>
        <AllNewsPage />
      </Protected>
    )
  },
  {
    path: 'news/all-news-list',
    component: (
      <Protected>
        <AllNewsPage />
      </Protected>
    )
  },
  {
    path: 'news/news-management',
    component: (
      <Protected>
        <NewsManagementPage />
      </Protected>
    )
  },
  {
    path: 'news/category',
    component: (
      <Protected>
        <NewsCategoryPage />
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
    path: 'downloads',
    component: (
      <Protected>
        <DownloadPage />
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
    path: 'our-team/department',
    component: (
      <Protected>
        <DepartmentPage />
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
    path: 'nfea-team',
    component: (
      <Protected>
        <NFEATeamPage />
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
        <SurveyListPage />
      </Protected>
    )
  },
  {
    path: 'survey/site/questions',
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
        <ResultListPage />
      </Protected>
    )
  },
  {
    path: 'survey/result/result-list',
    component: (
      <Protected>
        <ResultsPage />
      </Protected>
    )
  },
  {
    path: 'survey/result/participants',
    component: (
      <Protected>
        <ParticipantsPage />
      </Protected>
    )
  },
  {
    path: 'survey/result/participants/:participant_id',
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
    path: 'business/business-list',
    component: (
      <Protected>
        <BusinessPage />
      </Protected>
    )
  },
  {
    path: 'business/contact',
    component: (
      <Protected>
        <BusinessContactPage />
      </Protected>
    )
  },
  {
    path: 'business/business-management',
    component: (
      <Protected>
        <BusinessManagementPage />
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
    path: 'settings/ncc-site',
    component: (
      <Protected>
        <NccSiteSettingsPage />
      </Protected>
    )
  },
  {
    path: 'settings/business-site',
    component: (
      <Protected>
        <BusinessSiteSettingsPage />
      </Protected>
    )
  },
  {
    path: 'nbns/nbns-settings',
    component: (
      <Protected>
        <NBNSPage />
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
    path: 'settings/region',
    component: (
      <Protected>
        <RegionPage />
      </Protected>
    )
  },
  {
    path: 'nbns/nbns-banner',
    component: (
      <Protected>
        <NBNSBannerPage />
      </Protected>
    )
  },
  {
    path: 'nbns/nbns-followers',
    component: (
      <Protected>
        <NBNSFollowersPage />
      </Protected>
    )
  },
  {
    path: 'nbns/nbns-gallery',
    component: (
      <Protected>
        <NBNSGalleryPage />
      </Protected>
    )
  },
  {
    path: 'nbns/nbns-articles',
    component: (
      <Protected>
        <NBNSArticlesPage />
      </Protected>
    )
  },
  {
    path: 'nbns/nbns-press-release',
    component: (
      <Protected>
        <NBNSPressReleasePage />
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
  },
  {
    path: 'email-template/business-template',
    component: (
      <Protected>
        <BusinessTemplatePage />
      </Protected>
    )
  },
  {
    path: 'email-template/nbns-template',
    component: (
      <Protected>
        <NBNSTemplatePage />
      </Protected>
    )
  }
];

export default DashboardRoutes;
