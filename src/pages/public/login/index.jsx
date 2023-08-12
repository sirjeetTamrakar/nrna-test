import { Button, CircularProgress, Typography } from '@mui/material';
import InputField from 'components/globals/inputField';
import PasswordField from 'components/globals/passwordInput';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import AuthLayout from 'layouts/authLayout';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login as LoginAction } from 'redux/auth/actions';
import { appVersion, isLoggedIn } from 'utils';
import * as yup from 'yup';
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();
  const [signInLoading, setSignInLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required('Password is required.')
  });

  const resolver = useYupValidationResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver
  });

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/dashboard');
    }
  }, []);

  const forgotPassword = () => {
    return navigate('/forgot-password');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  // submit function
  const handleBtnClick = (data) => {
    setSignInLoading(true);
    dispatch(LoginAction(data, setSignInLoading, goToDashboard));
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(handleBtnClick)}>
        <InputField
          name="email"
          register={register}
          label="Email"
          type="text"
          placeholder="Email Here"
          error={errors.email}
          isRequired
        />
        <br />
        <PasswordField
          name={'password'}
          label="Password"
          placeholder="Password here"
          register={register}
          isRequired
          error={errors.password}
        />
        <br />
        {!signInLoading && (
          <Button
            sx={{ fontSize: '16px', fontWeight: '700' }}
            className={classes.submitButton}
            variant="contained"
            type={'submit'}
            color="primary">
            Sign In
          </Button>
        )}
        {signInLoading && (
          <Button
            className={classes.submitButton}
            sx={{ fontSize: '16px', fontWeight: '700' }}
            variant="contained"
            type={'submit'}
            color="primary">
            <Typography className={classes.circularProgressText}>Signing In</Typography>
            <CircularProgress size={20} sx={{ color: '#fff', marginLeft: '1.5rem' }} />
          </Button>
        )}

        <br />
        <Typography className={classes.endText} align="center">
          Trouble Logging in?
          <span onClick={forgotPassword} className={classes.blueSpan}>
            Forgot Password
          </span>
        </Typography>
        <Typography className={classes.endText} align="center">
          v{appVersion()}
        </Typography>
      </form>
    </AuthLayout>
  );
};

export default Login;
