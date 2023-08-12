import Home from 'components/locals/Homepage';
import AuthLayout from 'layouts/authLayout';

export const Homepage = () => {
  return (
    <>
      <AuthLayout>
        <Home />
      </AuthLayout>
    </>
  );
};
