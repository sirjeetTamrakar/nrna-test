import SecondaryNav from 'components/globals/SecondaryNav';
import About from 'components/locals/About';
import Downloads from 'components/locals/Download';
import SingleDownload from 'components/locals/Download/SingleDownload';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData } from 'redux/homepage/actions';

const SingleDownloadPage = () => {
  const [selected, setSelected] = useState('download');
  console.log({ selected });

  const navigate = useNavigate();
  const handleFunction = (data) => {
    navigate(data);
  };
  const dispatch = useDispatch();
  const { home_data } = useSelector((state) => state.homepage);
  console.log('bbbvbvbv', { home_data });
  useEffect(() => {
    dispatch(getAllHomeData());
  }, []);
  const options = [
    { title: 'Home', value: 'home', clickFunction: () => handleFunction('/') },
    { title: 'About', value: 'about', clickFunction: () => handleFunction('/nrna/about') },
    {
      title: 'Candidate',
      value: 'candidate',
      clickFunction: () => handleFunction('/nrna/candidate')
    }
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

  const allOptions = [...options, ...contact, ...download];

  return (
    <>
      <SecondaryNav
        title={'Download'}
        options={allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <SingleDownload />;
    </>
  );
};

export default SingleDownloadPage;
