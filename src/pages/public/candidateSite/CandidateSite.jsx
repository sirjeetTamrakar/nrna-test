import CandidateSite from 'components/locals/Candidates/CandidateSite';
import AuthLayout from 'layouts/authLayout';

const CandidateSitePage = () => {
  return (
    <>
      <AuthLayout userType="candidate">
        <CandidateSite />
      </AuthLayout>
    </>
  );
};

export default CandidateSitePage;
