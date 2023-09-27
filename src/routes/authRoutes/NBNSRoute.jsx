import Homepage from 'pages/public/nbnsSite';
import AboutPage from 'pages/public/nbnsSite/About';
import AdvisePage from 'pages/public/nbnsSite/Advise';
import MissionPage from 'pages/public/nbnsSite/Mission';
import NbnsTabComponentPage from 'pages/public/nbnsSite/NbnsTabComponent';
import SupportPage from 'pages/public/nbnsSite/Support';
import SurveyPage from 'pages/public/nbnsSite/Survey';
import SurveyQuestionPage from 'pages/public/nbnsSite/SurveyQuestions';
import VisionPage from 'pages/public/nbnsSite/Vision';

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
  }
];
