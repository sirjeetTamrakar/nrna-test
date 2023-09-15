import SecondaryNav from 'components/globals/SecondaryNav';
import Contact from 'components/locals/Contact';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [selected, setSelected] = useState('contact');
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
      <SecondaryNav
        title={'Home'}
        options={options}
        setSelected={setSelected}
        selected={selected}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
