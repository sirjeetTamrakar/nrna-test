import AboutPage from 'pages/public/candidateSite/About';
import CandidateSitePage from 'pages/public/candidateSite/CandidateSite';
import Contact from 'pages/public/candidateSite/Contact';
import News from 'pages/public/candidateSite/News';
import Profile from 'pages/public/candidateSite/Profile';
import SingleNewsCandidate from 'pages/public/candidateSite/SingleNews';

export const candidateRoute = [
  {
    path: ':candidate',
    component: <CandidateSitePage />
  },
  {
    path: ':candidate/profile',
    component: <Profile />
  },
  {
    path: ':candidate/news',
    component: <News />
  },
  {
    path: ':candidate/contact',
    component: <Contact />
  },
  {
    path: ':candidate/about',
    component: <AboutPage />
  },
  {
    path: ':candidate/news/:slug',
    component: <SingleNewsCandidate />
  }
];
