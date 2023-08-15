import News from 'components/locals/News';
import AuthLayout from 'layouts/authLayout';

const NewsPage = () => {
  return (
    <AuthLayout sticky={true}>
      <News />
    </AuthLayout>
  );
};

export default NewsPage;
