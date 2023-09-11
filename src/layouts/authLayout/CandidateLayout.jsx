import { Box } from '@mui/material';
import SecondaryNav from 'components/globals/secondaryNav';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const CandidateLayout = () => {
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

export default CandidateLayout;

const SecondaryNavWrapper = () => {
  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { candidate } = useParams();
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
      path: `/${candidate}`,
      clickFunction: () => handleFunction(`/${candidate}`)
    },
    {
      title: 'News',
      value: 'news',
      path: `/${candidate}/news`,
      clickFunction: () => handleFunction(`/${candidate}/news`)
    },
    {
      title: 'Business',
      value: 'business',
      path: `/${candidate}/business`,
      clickFunction: () => handleFunction(`/${candidate}/business`)
    },
    {
      title: 'Contact',
      value: 'contact',
      path: `/${candidate}/contact`,
      clickFunction: () => handleFunction(`/${candidate}/contact`)
    }
  ];
  return (
    <SecondaryNav
      title="User Name"
      options={options}
      setSelected={setSelected}
      selected={selected}
    />
  );
};
