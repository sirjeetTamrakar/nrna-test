import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import SettingsDataForm from './Form';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const Register = () => {
  const defaultValues = {};
  const classes = useStyles();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <SettingsDataForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Sumbit" loading={false} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
