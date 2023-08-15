import Survey from 'components/locals/NBNS/Survey';
import AuthLayout from 'layouts/authLayout';

const SurveyPage = () => {
  return (
    <>
      <AuthLayout userType="nbns" sticky={true}>
        <Survey />
      </AuthLayout>
    </>
  );
};

export default SurveyPage;
