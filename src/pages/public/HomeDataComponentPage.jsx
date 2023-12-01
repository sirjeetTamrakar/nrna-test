import SecondaryNav from 'components/globals/SecondaryNav';
import HomeDataCom from 'components/locals/HomeDataReuseCom/HomeDataCom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllHomeData, getCandidates } from 'redux/homepage/actions';

const HomeDataComponentPage = () => {
  const pathname = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { slug } = useParams();
  console.log({ slug });
  const [selected, setSelected] = useState(slug);
  console.log({ selected });
  const navigate = useNavigate();
  const handleFunction = (data) => {
    navigate(data);
  };

  const dispatch = useDispatch();
  const { home_data, candidates } = useSelector((state) => state.homepage);
  console.log('bbbvbvbv', { home_data });
  useEffect(() => {
    dispatch(getAllHomeData());
    dispatch(getCandidates());
  }, []);

  const options = [
    { title: 'Home', value: 'home', clickFunction: () => handleFunction('/foreign-employment') },
    {
      title: 'About',
      value: 'about',
      clickFunction: () => handleFunction('/foreign-employment/about')
    }
  ];
  const contact = [
    {
      title: 'Contact',
      value: 'contact',
      clickFunction: () => handleFunction('/foreign-employment/contact')
    }
  ];
  const download = [
    {
      title: 'Download',
      value: 'download',
      clickFunction: () => handleFunction('/foreign-employment/download')
    }
  ];

  const ourTeam = [
    {
      title: 'Our Team',
      value: 'our-team',
      clickFunction: () => handleFunction('/foreign-employment/our-team')
    }
  ];

  const allOptions = [...options, ...ourTeam, ...contact];
  const notCandidateOptions = [...options, ...contact];

  return (
    <>
      <SecondaryNav
        title={'Home'}
        options={allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <HomeDataCom />;
    </>
  );
};

export default HomeDataComponentPage;
