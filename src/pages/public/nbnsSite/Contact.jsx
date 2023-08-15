import Contact from 'components/locals/NBNS/Contact';
import AuthLayout from 'layouts/authLayout';

const ContactPage = () => {
  return (
    <>
      <AuthLayout userType="nbns" sticky={true}>
        <Contact />
      </AuthLayout>
    </>
  );
};

export default ContactPage;
