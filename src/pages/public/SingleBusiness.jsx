import BusinessProfile from 'components/locals/Business/SingleBusiness';
import AuthLayout from 'layouts/authLayout';

const SingleBusinessPage = () => {
  return (
    <AuthLayout sticky={true}>
      <BusinessProfile />
    </AuthLayout>
  );
};

export default SingleBusinessPage;
