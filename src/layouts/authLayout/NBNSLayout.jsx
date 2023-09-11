import { Box } from '@mui/material';
import SecondaryNav from 'components/globals/secondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getNbnsSettings } from 'redux/homepage/actions';
import Footer from './Footer';
import Navbar from './Navbar';

const NBNSLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNbnsSettings({ type: 'nbns', id: 1 }));
  });

  return (
    <>
      <Navbar />
      <SecondaryNavWrapper />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default NBNSLayout;

const SecondaryNavWrapper = () => {
  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleFunction = (data) => {
    navigate(data);
  };
  useEffect(() => {
    pathname && setSelected(options?.find((list) => list?.path == pathname)?.value);
  }, [pathname]);
  const options = [
    { title: 'Home', value: 'home', path: '/nbns', clickFunction: () => handleFunction('/nbns') },
    {
      title: 'Survey',
      value: 'survey',
      path: '/nbns/survey',
      clickFunction: () => handleFunction('/nbns/survey')
    },
    {
      title: 'Advice',
      value: 'advice',
      path: '/nbns/advise',
      clickFunction: () => handleFunction('/nbns/advise')
    },
    {
      title: 'Support Us',
      value: 'support',
      path: '/nbns/support',
      clickFunction: () => handleFunction('/nbns/support')
    },

    {
      title: 'About',
      value: 'about',
      path: '/nbns/about',
      clickFunction: () => handleFunction('/nbns/about')
    },
    {
      title: 'Mission',
      value: 'mission',
      path: '/nbns/mission',
      clickFunction: () => handleFunction('/nbns/mission')
    },
    {
      title: 'Vision',
      value: 'vision',
      path: '/nbns/vision',
      clickFunction: () => handleFunction('/nbns/vision')
    }
  ];
  return <SecondaryNav options={options} setSelected={setSelected} selected={selected} />;
};
