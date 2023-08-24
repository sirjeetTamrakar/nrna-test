import { Box, Container, Typography } from '@mui/material';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import * as Yup from 'yup';
import Form from './Form';
import useStyles from './styles';

const SurveyQuestions = () => {
  const classes = useStyles();
  const defaultValues = {};
  const validationSchema = Yup.object({});
  return (
    <Container>
      <Box className={classes.surveyQuestionRoot}>
        <Typography variant="h2" textAlign="center" className={classes.surveyPageTitle}>
          Exclusive Survey Questions Await Your Input
        </Typography>
        <CustomFormProvider
          defaultValues={defaultValues}
          resolver={useYupValidationResolver(validationSchema)}>
          <Form />
        </CustomFormProvider>
      </Box>
    </Container>
  );
};

export default SurveyQuestions;
