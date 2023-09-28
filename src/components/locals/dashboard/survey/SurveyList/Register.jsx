import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { createSurvey } from '../redux/actions';
import SurveyListForm from './Form';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const Register = ({ handleClose }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const defaultValues = { created_by: user?.id };
  const classes = useStyles();
  const { create_survey_loading } = useSelector((state) => state.question);
  console.log({ create_survey_loading });
  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append('title', data?.title);
    // formData.append('description', data?.description);

    dispatch(createSurvey(data, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <SurveyListForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={create_survey_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
