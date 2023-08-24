import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import NewsForm from './Form';
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
        <NewsForm />
      </CustomFormProvider>
    </>
  );
};

export default Register;
