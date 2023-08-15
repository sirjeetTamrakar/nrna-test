import NBNSSite from 'components/locals/NBNS';
import AuthLayout from 'layouts/authLayout';

const NBNSPage = () => {
  return (
    <>
      <AuthLayout userType="nbns">
        <NBNSSite />
      </AuthLayout>
    </>
  );
};

export default NBNSPage;
