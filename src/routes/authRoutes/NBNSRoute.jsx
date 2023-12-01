import SingleArticle from 'components/locals/NBNS/Articles/SingleArticle';
import CandidateSiteSingleHome from 'components/locals/NBNS/Candidate/CandidateSingle';
import SingleDownload from 'components/locals/NBNS/Downloads/SingleDownload';
import SinglePressRelease from 'components/locals/NBNS/PressRelease/SinglePressRelease';
import Homepage from 'pages/public/nbnsSite';
import AboutPage from 'pages/public/nbnsSite/About';
import AdvisePage from 'pages/public/nbnsSite/Advise';
import ArticlePageNBNS from 'pages/public/nbnsSite/ArticlePage';
import CandidatePage from 'pages/public/nbnsSite/Candidate';
import DownloadsPageNBNS from 'pages/public/nbnsSite/Downloads';
import GalleryPageNBNS from 'pages/public/nbnsSite/GalleryPage';
import MissionPage from 'pages/public/nbnsSite/Mission';
import NbnsTabComponentPage from 'pages/public/nbnsSite/NbnsTabComponent';
import PressReleasePageNBNS from 'pages/public/nbnsSite/PressReleasePage';
import SupportPage from 'pages/public/nbnsSite/Support';
import SurveyPage from 'pages/public/nbnsSite/Survey';
import SurveyQuestionPage from 'pages/public/nbnsSite/SurveyQuestions';
import VisionPage from 'pages/public/nbnsSite/Vision';

export const nbnsRoutes = [
  {
    path: '/',
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
    path: '/nbns/about',
    component: <AboutPage />
  },
  {
    path: '/nbns/mission',
    component: <MissionPage />
  },
  {
    path: '/nbns/vision',
    component: <VisionPage />
  },
  {
    path: '/nbns/survey/questions',
    component: <SurveyQuestionPage />
  },
  {
    path: `/nbns/:slug`,
    component: <NbnsTabComponentPage />
  },
  {
    path: `/nbns/gallery`,
    component: <GalleryPageNBNS />
  },
  {
    path: `/nbns/articles`,
    component: <ArticlePageNBNS />
  },
  {
    path: `/nbns/articles/:slug`,
    component: <SingleArticle />
  },
  {
    path: `/nbns/press-release`,
    component: <PressReleasePageNBNS />
  },
  {
    path: `/nbns/press-release/:slug`,
    component: <SinglePressRelease />
  },
  {
    path: `/nbns/download`,
    component: <DownloadsPageNBNS />
  },
  {
    path: `/nbns/download/:slug`,
    component: <SingleDownload />
  },
  {
    path: `/nbns/candidate`,
    component: <CandidatePage />
  },
  {
    path: `/nbns/candidate/:slug`,
    component: <CandidateSiteSingleHome />
  }
];
