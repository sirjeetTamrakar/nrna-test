import SecondaryNav from 'components/globals/SecondaryNav';
import Downloads from 'components/locals/Download';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData, getCandidates } from 'redux/homepage/actions';

const DownloadPage = () => {
  const [selected, setSelected] = useState('download');
  console.log({ selected });

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
  const ourTeam = [
    {
      title: 'Our Team',
      value: 'our-team',
      clickFunction: () => handleFunction('/foreign-employment/our-team')
    }
  ];

  const allOptions = [...options, ...ourTeam, ...contact, ...download];

  const notCandidateOptions = [...options, ...contact, ...download];

  return (
    <>
      <SecondaryNav
        title={'NFEA > Download'}
        options={allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <Downloads />;
    </>
  );
};

export default DownloadPage;
