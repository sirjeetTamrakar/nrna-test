import Support from 'components/locals/NBNS/Support';
import AuthLayout from 'layouts/authLayout';

const SupportPage = () => {
  return (
    <>
      <AuthLayout userType="nbns" sticky={true}>
        <Support />
      </AuthLayout>
    </>
  );
};

export default SupportPage;
