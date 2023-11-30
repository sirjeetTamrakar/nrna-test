import SecondaryNav from 'components/globals/SecondaryNav';
import Contact from 'components/locals/Contact';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData, getCandidates } from 'redux/homepage/actions';

const ContactPage = () => {
  const [selected, setSelected] = useState('contact');
  const navigate = useNavigate();
  const handleFunction = (data) => {
    navigate(data);
  };
  const dispatch = useDispatch();
  const { candidates } = useSelector((state) => state.homepage);
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

  const candidate = [
    {
      title: 'Candidate',
      value: 'candidate',
      clickFunction: () => handleFunction('/foreign-employment/candidate')
    }
  ];

  const allOptions = [...options, ...candidate, ...contact];
  const notCandidateOptions = [...options, ...contact];

  return (
    <>
      <SecondaryNav
        title={'NFEA ( नेपाल वैदेशिक रोजगार संघ )'}
        options={!candidates ? notCandidateOptions : allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
