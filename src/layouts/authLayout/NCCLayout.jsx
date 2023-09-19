import { Box } from '@mui/material';
import SecondaryNav from 'components/globals/SecondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSingleNCC, getSiteSettings } from 'redux/homepage/actions';
import Footer from './Footer';
import Navbar from './Navbar';

const NCCLayout = () => {
  const dispatch = useDispatch();
  const { ncc: slug } = useParams();
  const { ncc } = useSelector((state) => state.homepage);
  const { user } = useSelector((state) => state.auth);

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

export default NCCLayout;

const SecondaryNavWrapper = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { ncc } = useParams();
  const handleFunction = (data) => {
    navigate(data);
  };
  console.log({ ncc });
  const { single_ncc } = useSelector((state) => state.homepage);
  console.log({ single_ncc });
  useEffect(() => {
    dispatch(getSingleNCC(ncc));
  }, [ncc]);
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
      title={single_ncc?.country_name}
      color={single_ncc?.color}
      options={options}
      setSelected={setSelected}
      selected={selected}
    />
  );
};
