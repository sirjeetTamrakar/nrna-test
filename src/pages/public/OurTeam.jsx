import OurTeam from 'components/locals/OurTeam';
import AuthLayout from 'layouts/authLayout';

const OurTeamPage = () => {
  return (
    <AuthLayout sticky={true}>
      <OurTeam />
    </AuthLayout>
  );
};

export default OurTeamPage;
