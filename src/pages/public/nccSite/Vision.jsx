import Vision from 'components/locals/NCC/NccSite/Vision';
import AuthLayout from 'layouts/authLayout';

const VisionPage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <Vision title="Vision" />
    </AuthLayout>
  );
};

export default VisionPage;
