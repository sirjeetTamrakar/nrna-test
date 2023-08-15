import Advise from 'components/locals/NBNS/Advise';
import AuthLayout from 'layouts/authLayout';

const AdvisePage = () => {
  return (
    <>
      <AuthLayout userType="nbns" sticky={true}>
        <Advise />
      </AuthLayout>
    </>
  );
};

export default AdvisePage;
