import SecondaryNav from 'components/globals/SecondaryNav';
import Mission from 'components/locals/Mission';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MissionPage = () => {
  const [selected, setSelected] = useState('mission');
  const navigate = useNavigate();
  const handleFunction = (data) => {
    navigate(data);
  };
  const options = [
    { title: 'Home', value: 'home', clickFunction: () => handleFunction('/') },
    { title: 'About', value: 'about', clickFunction: () => handleFunction('/about') },
    { title: 'Mission', value: 'mission', clickFunction: () => handleFunction('/mission') },
    { title: 'Vision', value: 'vision', clickFunction: () => handleFunction('/vision') },
    { title: 'Contact', value: 'contact', clickFunction: () => handleFunction('/contact') }
  ];
  return (
    <>
      <SecondaryNav options={options} setSelected={setSelected} selected={selected} />
      <Mission />;
    </>
  );
};

export default MissionPage;
