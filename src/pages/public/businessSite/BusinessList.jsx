import ServicesList from 'components/locals/Business/ServicesList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleBusiness } from 'redux/homepage/actions';

const ServiceListPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  console.log('bnnbnbnn', { slug });
  const { single_business } = useSelector((state) => state.homepage);
  console.log({ single_business });
  useEffect(() => {
    dispatch(getSingleBusiness(slug));
  }, [slug]);

  return <ServicesList data={single_business} />;
};

export default ServiceListPage;
