import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import CandidateNavbar from './CandidateNavbar';
import Footer from './Footer';

const CandidateLayout = () => {
  return (
    <>
      <CandidateNavbar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default CandidateLayout;
