import SecondaryNav from 'components/globals/secondaryNav';
import About from 'components/locals/About';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const [selected, setSelected] = useState('about');
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
      <About />;
    </>
  );
};

export default AboutPage;
