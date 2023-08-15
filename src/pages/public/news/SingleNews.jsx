import SingleNews from 'components/locals/News/SingleNews';
import AuthLayout from 'layouts/authLayout';

const SingleNewsPage = () => {
  return (
    <>
      <AuthLayout sticky={true}>
        <SingleNews />
      </AuthLayout>
    </>
  );
};

export default SingleNewsPage;
