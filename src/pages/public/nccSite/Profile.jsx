import Profile from 'components/locals/NCC/NccSite/Profile';
import AuthLayout from 'layouts/authLayout';

const ProfilePage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <Profile />
    </AuthLayout>
  );
};

export default ProfilePage;
