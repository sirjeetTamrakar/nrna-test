import SecondaryNav from 'components/globals/secondaryNav';
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

  const allOptions = [...options, ...candidate, ...contact, ...download];
  const notCandidateOptions = [...options, ...contact, ...download];

  return (
    <>
      <SecondaryNav
        title={'FEA > Download'}
        options={!candidates ? notCandidateOptions : allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <SingleDownload />;
    </>
  );
};

export default SingleDownloadPage;
