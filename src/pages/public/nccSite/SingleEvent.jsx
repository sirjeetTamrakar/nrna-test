import SingleEvent from 'components/locals/NCC/NccSite/SingleEvent';
import AuthLayout from 'layouts/authLayout';

const SingleEventNCC = () => {
  return (
    <>
      <AuthLayout sticky={true} userType="ncc">
        <SingleEvent />
      </AuthLayout>
    </>
  );
};

export default SingleEventNCC;
