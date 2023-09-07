// import BusinessProfile from 'components/locals/Business/SingleBusiness';
import BusinessProfile from 'components/locals/Business/SingleBusinesss';
import AuthLayout from 'layouts/authLayout';

const SingleBusinessPage = () => {
  return (
    <AuthLayout sticky={true}>
      <BusinessProfile />
    </AuthLayout>
  );
};

export default SingleBusinessPage;
