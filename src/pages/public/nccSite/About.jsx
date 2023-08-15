import About from 'components/locals/NCC/NccSite/About';
import AuthLayout from 'layouts/authLayout';

const AboutPage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <About title="Who we are" />
    </AuthLayout>
  );
};

export default AboutPage;
