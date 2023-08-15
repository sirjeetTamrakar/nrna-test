import About from 'components/locals/NBNS/About';
import AuthLayout from 'layouts/authLayout';

const AboutPage = () => {
  return (
    <>
      <AuthLayout userType="nbns" sticky={true}>
        <About />
      </AuthLayout>
    </>
  );
};

export default AboutPage;
