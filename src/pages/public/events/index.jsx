import Events from 'components/locals/Events';
import AuthLayout from 'layouts/authLayout';

const EventsPage = () => {
  return (
    <AuthLayout sticky={true}>
      <Events />
    </AuthLayout>
  );
};

export default EventsPage;
