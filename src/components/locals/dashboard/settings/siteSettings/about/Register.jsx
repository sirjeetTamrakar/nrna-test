import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import AboutForm from './Form';
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
        <AboutForm />
      </CustomFormProvider>
    </>
  );
};

export default Register;
