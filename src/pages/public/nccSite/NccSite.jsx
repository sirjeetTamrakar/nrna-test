import NccSite from 'components/locals/NCC/NccSite';
import AuthLayout from 'layouts/authLayout';

const NccSitePage = () => {
  return (
    <>
      <AuthLayout userType="ncc">
        <NccSite />
      </AuthLayout>
    </>
  );
};

export default NccSitePage;
