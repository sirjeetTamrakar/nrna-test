import SecondaryNav from 'components/globals/SecondaryNav';
import Home from 'components/locals/Homepage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllHomeData } from 'redux/homepage/actions';

export const Homepage = () => {
  const [selected, setSelected] = useState('home');
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
  const homeOptions = (home_data?.data?.slice(0, 4) || []).map((item) => ({
    title: item?.title,
    value: item?.slug,
    clickFunction: () => handleFunction(`/${item.slug}`)
  }));

  const options = [
    { title: 'Home', value: 'home', clickFunction: () => handleFunction('/') },
    { title: 'About', value: 'about', clickFunction: () => handleFunction('/about') }
  ];
  const contact = [
    { title: 'Contact', value: 'contact', clickFunction: () => handleFunction('/contact') }
  ];

  const allOptions = [...options, ...homeOptions, ...contact];

  return (
    <>
      <SecondaryNav
        title={'Home'}
        options={allOptions}
        setSelected={setSelected}
        selected={selected}
      />
      <Home />
    </>
  );
};
