import { Box } from '@mui/material';
import SecondaryNav from 'components/globals/SecondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllHomeData, getNbnsSettings } from 'redux/homepage/actions';
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
  const dispatch = useDispatch();
  const { slug } = useParams();

  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleFunction = (data) => {
    navigate(data);
  };
  useEffect(() => {
    // pathname && setSelected(options?.find((list) => list?.path == pathname)?.value);
    if (pathname) {
      const currentOption = pathname && options.find((list) => pathname.includes(list?.value));
      pathname && setSelected(currentOption?.value);
    }
  }, [pathname]);

  const options = [
    { title: 'Home', value: 'home', path: '/nbns', clickFunction: () => handleFunction('/nbns') },
    {
      title: 'About',
      value: 'about',
      path: '/nbns/about',
      clickFunction: () => handleFunction('/nbns/about')
    },
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
      title: 'Download',
      value: 'download',
      path: '/nbns/download',
      clickFunction: () => handleFunction('/nbns/download')
    }

    // {
    //   title: 'Mission',
    //   value: 'mission',
    //   path: '/nbns/mission',
    //   clickFunction: () => handleFunction('/nbns/mission')
    // },
    // {
    //   title: 'Vision',
    //   value: 'vision',
    //   path: '/nbns/vision',
    //   clickFunction: () => handleFunction('/nbns/vision')
    // }
  ];

  const { home_data } = useSelector((state) => state.homepage);

  useEffect(() => {
    const data = {
      type: 'nbns',
      id: 1
    };
    dispatch(getAllHomeData(data));
  }, []);
  const filterHomeData = (home_data?.data?.slice(0, 4) || [])?.filter(
    (item) => item?.slug !== 'advice' && item?.slug !== 'support'
  );
  // const homeOptions = filterHomeData?.map((item) => ({
  //   title: item?.tabtitle,
  //   value: item?.slug,
  //   clickFunction: () => handleFunction(`/nbns/${item.slug}`)
  // }));

  const allOptions = [...options];

  return (
    <SecondaryNav
      title="NBNS"
      options={allOptions}
      setSelected={setSelected}
      selected={selected}
      nbns
    />
  );
};
