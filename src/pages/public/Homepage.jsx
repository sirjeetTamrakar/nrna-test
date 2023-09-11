import SecondaryNav from 'components/globals/secondaryNav';
import Home from 'components/locals/Homepage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
  const [selected, setSelected] = useState('home');
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
      <Home />
    </>
  );
};
