import SecondaryNav from 'components/globals/SecondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData, getCandidates } from 'redux/homepage/actions';
import OurTeamFEA from './OurTeamFEA';

const OurTeamFEAPage = () => {
  const [selected, setSelected] = useState('our-team');
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
  // const homeOptions = (home_data?.data?.slice(0, 4) || []).map((item) => ({
  //   title: item?.tabtitle,
  //   value: item?.slug,
  //   clickFunction: () => handleFunction(`/foreign-employment/${item.slug}`)
  // }));

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
        title={'NFEA ( नेपाल वैदेशिक रोजगार संघ )'}
        options={allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <OurTeamFEA />
    </>
  );
};

export default OurTeamFEAPage;
