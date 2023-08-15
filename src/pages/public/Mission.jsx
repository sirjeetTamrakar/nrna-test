import Mission from 'components/locals/Mission';
import AuthLayout from 'layouts/authLayout';

const MissionPage = () => {
  return (
    <AuthLayout sticky={true}>
      <Mission />
    </AuthLayout>
  );
};

export default MissionPage;
