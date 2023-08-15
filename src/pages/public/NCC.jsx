import NCC from 'components/locals/NCC';
import AuthLayout from 'layouts/authLayout';

const NCCPage = () => {
  return (
    <AuthLayout sticky={true}>
      <NCC />
    </AuthLayout>
  );
};

export default NCCPage;
