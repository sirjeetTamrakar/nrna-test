import BusinessListPage from 'pages/public/candidateSite/BusinessList';
import CandidateSitePage from 'pages/public/candidateSite/CandidateSite';
import Contact from 'pages/public/candidateSite/Contact';
import News from 'pages/public/candidateSite/News';
import SingleNewsCandidate from 'pages/public/candidateSite/SingleNews';

export const candidateRoute = [
  {
    path: '/:candidate',
    component: <CandidateSitePage />
  },
  {
    path: '/:candidate/news',
    component: <News />
  },
  {
    path: '/:candidate/business',
    component: <BusinessListPage />
  },
  {
    path: '/:candidate/contact',
    component: <Contact />
  },

  {
    path: '/:candidate/news/:slug',
    component: <SingleNewsCandidate />
  }
];
