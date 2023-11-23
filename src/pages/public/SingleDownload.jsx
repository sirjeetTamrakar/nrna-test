import SecondaryNav from 'components/globals/SecondaryNav';
import SingleDownload from 'components/locals/Download/SingleDownload';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData, getCandidates } from 'redux/homepage/actions';

const SingleDownloadPage = () => {
  const [selected, setSelected] = useState('download');
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
        title={'Download'}
        options={!candidates ? notCandidateOptions : allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <SingleDownload />;
    </>
  );
};

export default SingleDownloadPage;
