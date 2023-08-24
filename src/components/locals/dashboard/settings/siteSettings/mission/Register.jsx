import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import MissionForm from './Form';
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
        <MissionForm />
      </CustomFormProvider>
    </>
  );
};

export default Register;
