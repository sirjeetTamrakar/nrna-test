import CandidatePage from 'components/locals/Candidates';
import AuthLayout from 'layouts/authLayout';

const Candidates = () => {
  return (
    <AuthLayout sticky={true}>
      <CandidatePage />
    </AuthLayout>
  );
};

export default Candidates;
