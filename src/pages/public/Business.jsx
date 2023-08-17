import Business from 'components/locals/Business';
import AuthLayout from 'layouts/authLayout';

const BusinessPage = () => {
  return (
    <AuthLayout sticky={true}>
      <Business />
    </AuthLayout>
  );
};

export default BusinessPage;
