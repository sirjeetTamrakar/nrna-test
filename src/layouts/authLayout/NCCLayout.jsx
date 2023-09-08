import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { getSiteSettings } from 'redux/homepage/actions';
import Footer from './Footer';
import NCCNavbar from './NCCNavbar';

const NCCLayout = () => {
  const dispatch = useDispatch();
  const { ncc: slug } = useParams();
  const { ncc } = useSelector((state) => state.homepage);
  useEffect(() => {
    const single = ncc?.find((list) => list?.slug == slug);
    single?.id && dispatch(getSiteSettings({ type: 'ncc', id: single?.id }));
  }, [ncc]);
  return (
    <>
      <NCCNavbar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default NCCLayout;
