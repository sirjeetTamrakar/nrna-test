import { Box } from '@mui/material';
// import SecondaryNav from 'components/globals/SecondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSingleBusiness } from 'redux/homepage/actions';
import SecondaryNav from '../../components/globals/SecondaryNav';
import Footer from './Footer';
import Navbar from './Navbar';

const BusinessLayout = () => {
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
  const { slug } = useParams();
  const handleFunction = (data) => {
    navigate(data);
  };
  const { single_business } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getSingleBusiness(slug));
  }, [slug]);
  useEffect(() => {
    pathname && setSelected(options?.find((list) => list?.path == pathname)?.value);
  }, [pathname]);
  const options = [
    {
      title: 'Home',
      value: 'home',
      path: `/business/${slug}`,
      clickFunction: () => handleFunction(`/business/${slug}`)
    },
    {
      title: 'Service',
      value: 'service',
      path: `/business/${slug}/services`,
      clickFunction: () => handleFunction(`/business/${slug}/services`)
    }
  ];
  return (
    <SecondaryNav
      title={'Business name'}
      options={options}
      setSelected={setSelected}
      selected={selected}
    />
  );
};

export default BusinessLayout;
