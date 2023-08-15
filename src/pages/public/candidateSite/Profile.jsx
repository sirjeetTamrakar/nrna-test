import Profile from 'components/locals/Candidates/CandidateSite/Profile';
import AuthLayout from 'layouts/authLayout';

const ProfilePage = () => {
  return (
    <AuthLayout userType="candidate" sticky={true}>
      <Profile />
    </AuthLayout>
  );
};

export default ProfilePage;
