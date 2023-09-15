import BusinessList from 'components/locals/Candidates/CandidateSite/BusinessList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUser } from 'redux/homepage/actions';

const BusinessListPage = () => {
  const dispatch = useDispatch();
  const { candidate } = useParams();
  const { single_user } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getSingleUser(candidate));
  }, [candidate]);

  return <BusinessList data={single_user} />;
};

export default BusinessListPage;
