import Mission from 'components/locals/NCC/NccSite/Mission';
import AuthLayout from 'layouts/authLayout';

const MissionPage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <Mission title="Mission" />
    </AuthLayout>
  );
};

export default MissionPage;
