import Contact from 'components/locals/NCC/NccSite/Contact';
import AuthLayout from 'layouts/authLayout';

const ContactPage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <Contact />
    </AuthLayout>
  );
};

export default ContactPage;
