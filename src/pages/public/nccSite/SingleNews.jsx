import SingleNews from 'components/locals/NCC/NccSite/SingleNews';
import AuthLayout from 'layouts/authLayout';

const SingleNewsNCC = () => {
  return (
    <>
      <AuthLayout sticky={true} userType="ncc">
        <SingleNews />
      </AuthLayout>
    </>
  );
};

export default SingleNewsNCC;
