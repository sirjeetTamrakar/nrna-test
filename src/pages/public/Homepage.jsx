import SecondaryNav from 'components/globals/SecondaryNav';
import Home from 'components/locals/Homepage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData, getCandidates } from 'redux/homepage/actions';

export const Homepage = () => {
  const [selected, setSelected] = useState('home');
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
  //   clickFunction: () => handleFunction(`/nrna/${item.slug}`)
  // }));

  const options = [
    { title: 'Home', value: 'home', clickFunction: () => handleFunction('/') },
    { title: 'About', value: 'about', clickFunction: () => handleFunction('/nrna/about') }
  ];
  const contact = [
    { title: 'Contact', value: 'contact', clickFunction: () => handleFunction('/nrna/contact') }
  ];

  const download = [
    {
      title: 'Download',
      value: 'download',
      clickFunction: () => handleFunction('/nrna/download')
    }
  ];

  const candidate = [
    {
      title: 'Candidate',
      value: 'candidate',
      clickFunction: () => handleFunction('/nrna/candidate')
    }
  ];

  const allOptions = [...options, ...candidate, ...contact, ...download];
  const notCandidateOptions = [...options, ...contact, ...download];

  return (
    <>
      <SecondaryNav
        title={'Home'}
        options={!candidates ? notCandidateOptions : allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <Home />
    </>
  );
};
