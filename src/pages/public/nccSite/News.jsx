import News from 'components/locals/NCC/NccSite/News';
import AuthLayout from 'layouts/authLayout';

const NewsPage = () => {
  return (
    <AuthLayout userType="ncc" sticky={true}>
      <News />
    </AuthLayout>
  );
};

export default NewsPage;
