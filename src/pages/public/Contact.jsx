import Contact from 'components/locals/Contact';
import AuthLayout from 'layouts/authLayout';

const ContactPage = () => {
  return (
    <AuthLayout sticky={true}>
      <Contact />
    </AuthLayout>
  );
};

export default ContactPage;
