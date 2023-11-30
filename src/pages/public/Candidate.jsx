import SecondaryNav from 'components/globals/SecondaryNav';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData } from 'redux/homepage/actions';
import Candidates from './Candidates';

const CandidatePage = () => {
  const [selected, setSelected] = useState('candidate');
  console.log({ selected });

  const navigate = useNavigate();
  const handleFunction = (data) => {
    navigate(data);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHomeData());
  }, []);
  const options = [
    { title: 'Home', value: 'home', clickFunction: () => handleFunction('/foreign-employment') },
    {
      title: 'About',
      value: 'about',
      clickFunction: () => handleFunction('/foreign-employment/about')
    },
    {
      title: 'Candidate',
      value: 'candidate',
      clickFunction: () => handleFunction('/foreign-employment/candidate')
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

  const allOptions = [...options, ...contact, ...download];

  return (
    <>
      <SecondaryNav
        title={'FEA > Candidate'}
        options={allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <Candidates />;
    </>
  );
};

export default CandidatePage;
