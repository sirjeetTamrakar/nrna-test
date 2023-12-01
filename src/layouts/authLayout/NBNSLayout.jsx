import { Box } from '@mui/material';
import SecondaryNav from 'components/globals/SecondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllHomeData, getCandidates, getNbnsSettings } from 'redux/homepage/actions';
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
  const { home_data, candidates } = useSelector((state) => state.homepage);

  const handleFunction = (data) => {
    navigate(data);
  };
  useEffect(() => {
    // pathname && setSelected(options?.find((list) => list?.path == pathname)?.value);
    if (pathname) {
      const currentOption = options.find((list) => pathname.includes(list?.value));
      pathname && setSelected(currentOption?.value);
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(getCandidates());
  }, []);

  const options = [
    { title: 'Home', value: 'home', path: '/', clickFunction: () => handleFunction('/') },
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
      title: 'Articles',
      value: 'articles',
      path: '/nbns/articles',
      clickFunction: () => handleFunction('/nbns/articles')
    },
    {
      title: 'Press Release',
      value: 'press-release',
      path: '/nbns/press-release',
      clickFunction: () => handleFunction('/nbns/press-release')
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

  const optionsCandidate = [
    {
      title: 'Candidate',
      value: 'candidate',
      path: '/nbns/candidate',
      clickFunction: () => handleFunction('/nbns/candidate')
    }
  ];

  const optionsRest = [
    {
      title: 'Gallery',
      value: 'gallery',
      path: '/nbns/gallery',
      clickFunction: () => handleFunction('/nbns/gallery')
    },
    {
      title: 'Download',
      value: 'download',
      path: '/nbns/download',
      clickFunction: () => handleFunction('/nbns/download')
    }
  ];

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

  const allOptions = [...options, ...optionsCandidate, ...optionsRest];
  const notCandidateOptions = [...options, ...optionsRest];

  return (
    <SecondaryNav
      title="NBNS ( नेपाल वंशज नागरिक संघ )"
      options={!candidates ? notCandidateOptions : allOptions}
      setSelected={setSelected}
      selected={selected}
      nbns
    />
  );
};
