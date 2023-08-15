import News from 'components/locals/Candidates/CandidateSite/News';
import AuthLayout from 'layouts/authLayout';

const NewsPage = () => {
  return (
    <AuthLayout userType="candidate" sticky={true}>
      <News />
    </AuthLayout>
  );
};

export default NewsPage;
