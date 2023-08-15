import SingleEvent from 'components/locals/Events/SingleEvent';
import AuthLayout from 'layouts/authLayout';

const SingleEventPage = () => {
  return (
    <AuthLayout sticky={true}>
      <SingleEvent />
    </AuthLayout>
  );
};

export default SingleEventPage;
