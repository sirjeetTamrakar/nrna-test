import { Box } from '@mui/material';
// import SecondaryNav from 'components/globals/SecondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSingleUser } from 'redux/homepage/actions';
import SecondaryNav from '../../components/globals/SecondaryNav';
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

const SecondaryNavWrapper = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { candidate } = useParams();
  console.log({ candidate });
  const handleFunction = (data) => {
    navigate(data);
  };
  const { single_user } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getSingleUser(candidate));
  }, [candidate]);
  useEffect(() => {
    pathname && setSelected(options?.find((list) => list?.path == pathname)?.value);
  }, [pathname]);
  const options = [
    {
      title: 'Home',
      value: 'home',
      path: `/our-team/${candidate}`,
      clickFunction: () => handleFunction(`/our-team/${candidate}`)
    },
    {
      title: 'News',
      value: 'news',
      path: `/our-team/${candidate}/news`,
      clickFunction: () => handleFunction(`/our-team/${candidate}/news`)
    },
    {
      title: 'Business',
      value: 'business',
      path: `/our-team/${candidate}/business`,
      clickFunction: () => handleFunction(`/our-team/${candidate}/business`)
    },
    {
      title: 'Contact',
      value: 'contact',
      path: `/our-team/${candidate}/contact`,
      clickFunction: () => handleFunction(`/our-team/${candidate}/contact`)
    }
  ];
  return (
    <SecondaryNav
      title={single_user?.username}
      options={options}
      setSelected={setSelected}
      selected={selected}
    />
  );
};

export default CandidateLayout;
