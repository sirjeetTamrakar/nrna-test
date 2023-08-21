import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import CustomPasswordInput from 'components/common/Form/CustomPasswordInput';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/actions';
import * as Yup from 'yup';
const Login = ({ registerOpen, handleClose }) => {
  const defaultValues = {};
  const dispatch = useDispatch();
  const { login_loading } = useSelector((state) => state.auth);
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required('Please enter your password')
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data, handleClose));
  };

  const handleRegisterOpen = () => {
    registerOpen();
    handleClose();
  };

  return (
    <CustomFormProvider
      defaultValues={defaultValues}
      resolver={useYupValidationResolver(validationSchema)}>
      <CustomForm onSubmit={onSubmit}>
        <div className="login_wrapper">
          <div className="title">Login</div>
          <div className="subtitle">Login to the website to browse more</div>
          <Box display="flex" flexDirection="column" rowGap={`15px`}>
            <CustomInput name="email" label="Email" type="email" />
            <CustomPasswordInput name="password" label="Password" />
          </Box>

          <CustomButton buttonName="Login" fullWidth loading={login_loading} />
          <div className="link">
            Don't have an account. <span onClick={handleRegisterOpen}>Register</span>
          </div>
        </div>
      </CustomForm>
    </CustomFormProvider>
  );
};

export default Login;
