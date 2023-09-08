import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getNbnsSettings } from 'redux/homepage/actions';
import Footer from './Footer';
import NBNSNavbar from './NBNSNavbar';

const NBNSLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNbnsSettings({ type: 'nbns', id: 1 }));
  });
  return (
    <>
      <NBNSNavbar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default NBNSLayout;
