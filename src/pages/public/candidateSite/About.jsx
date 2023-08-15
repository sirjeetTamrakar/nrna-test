import About from 'components/locals/Candidates/CandidateSite/About';
import AuthLayout from 'layouts/authLayout';

const AboutPage = () => {
  return (
    <AuthLayout userType="candidate" sticky={true}>
      <About title="About Me" />
    </AuthLayout>
  );
};

export default AboutPage;
