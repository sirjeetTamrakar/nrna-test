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
    path: 'our-team/:candidate/news',
    component: <News />
  },
  {
    path: 'our-team/:candidate/business',
    component: <BusinessListPage />
  },
  {
    path: 'our-team/:candidate/contact',
    component: <Contact />
  },

  {
    path: 'our-team/:candidate/news/:slug',
    component: <SingleNewsCandidate />
  }
];
