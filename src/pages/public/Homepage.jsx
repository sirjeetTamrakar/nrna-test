import SecondaryNav from 'components/globals/SecondaryNav';
import Home from 'components/locals/Homepage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData, getCandidates } from 'redux/homepage/actions';

const Homepage = () => {
  const [selected, setSelected] = useState('home');

  const navigate = useNavigate();
  const handleFunction = (data) => {
    navigate(data);
  };

  const dispatch = useDispatch();
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
        title={'NFEA ( नेपाल वैदेशिक रोजगार संघ )'}
        options={allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <Home />
    </>
  );
};

export default Homepage;
