import Events from 'components/locals/NCC/NccSite/Events';
import AuthLayout from 'layouts/authLayout';

const EventsPage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <Events />
    </AuthLayout>
  );
};

export default EventsPage;
