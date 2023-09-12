import { Box } from '@mui/material';
import SecondaryNav from 'components/globals/secondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSiteSettings } from 'redux/homepage/actions';
import Footer from './Footer';
import Navbar from './Navbar';

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
      <Navbar />
      <SecondaryNavWrapper />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

const SecondaryNavWrapper = () => {
  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { ncc } = useParams();
  const handleFunction = (data) => {
    navigate(data);
  };
  useEffect(() => {
    pathname && setSelected(options?.find((list) => list?.path == pathname)?.value);
  }, [pathname]);
  const options = [
    {
      title: 'Home',
      value: 'home',
      path: `/ncc/${ncc}`,
      clickFunction: () => handleFunction(`/ncc/${ncc}`)
    },
    {
      title: 'About',
      value: 'about',
      path: `/ncc/${ncc}/about`,
      clickFunction: () => handleFunction(`/ncc/${ncc}/about`)
    },
    {
      title: 'Our Team',
      value: 'team',
      path: `/ncc/${ncc}/committee`,
      clickFunction: () => handleFunction(`/ncc/${ncc}/committee`)
    },
    {
      title: 'News',
      value: 'news',
      path: `/ncc/${ncc}/news`,
      clickFunction: () => handleFunction(`/ncc/${ncc}/news`)
    },
    {
      title: 'Events',
      value: 'events',
      path: `/ncc/${ncc}/events`,
      clickFunction: () => handleFunction(`/ncc/${ncc}/events`)
    },
    {
      title: 'Mission',
      value: 'mission',
      path: `/ncc/${ncc}/mission`,
      clickFunction: () => handleFunction(`/ncc/${ncc}/mission`)
    },
    {
      title: 'Vision',
      value: 'vision',
      path: `/ncc/${ncc}/vision`,
      clickFunction: () => handleFunction(`/ncc/${ncc}/vision`)
    },
    {
      title: 'Contact',
      value: 'contact',
      path: `/ncc/${ncc}/contact`,
      clickFunction: () => handleFunction(`/ncc/${ncc}/contact`)
    }
  ];
  return (
    <SecondaryNav
      title="NCC Name"
      options={options}
      setSelected={setSelected}
      selected={selected}
    />
  );
};

export default NCCLayout;
