import Contact from 'components/locals/Candidates/CandidateSite/Contact';
import AuthLayout from 'layouts/authLayout';

const ContactPage = () => {
  return (
    <AuthLayout userType="candidate" sticky={true}>
      <Contact />
    </AuthLayout>
  );
};

export default ContactPage;
