import About from 'components/locals/About';
import AuthLayout from 'layouts/authLayout';

const AboutPage = () => {
  return (
    <AuthLayout sticky={true}>
      <About />
    </AuthLayout>
  );
};

export default AboutPage;
