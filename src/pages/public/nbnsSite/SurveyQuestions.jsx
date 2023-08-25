import SurveyQuestions from 'components/locals/NBNS/Survey/SurveyQuestions';
import AuthLayout from 'layouts/authLayout';

const SurveyQuestionPage = () => {
  return (
    <>
      <AuthLayout userType="nbns" sticky={true}>
        <SurveyQuestions />
      </AuthLayout>
    </>
  );
};

export default SurveyQuestionPage;
