import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import SettingsDataForm from './Form';
import { useStyles } from './styles';

const Register = () => {
  const defaultValues = {};
  const classes = useStyles();

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <SettingsDataForm />
      </CustomFormProvider>
    </>
  );
};

export default Register;
