import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import VisionForm from './Form';
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
        <VisionForm />
      </CustomFormProvider>
    </>
  );
};

export default Register;
