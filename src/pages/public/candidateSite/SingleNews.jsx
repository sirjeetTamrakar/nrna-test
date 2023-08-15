import SingleNews from 'components/locals/Candidates/CandidateSite/SingleNews';
import AuthLayout from 'layouts/authLayout';

const SingleNewsCandidate = () => {
  return (
    <>
      <AuthLayout sticky={true} userType="candidate">
        <SingleNews />
      </AuthLayout>
    </>
  );
};

export default SingleNewsCandidate;
