import { Button, CircularProgress, Typography } from '@mui/material';
import PasswordField from 'components/globals/passwordInput';
import AuthLayout from 'layouts/authLayout';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

import useStyles from './styles';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from 'redux/auth/actions';
const ResetPassword = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { loading } = useSelector((state) => state.auth);
  const schema = yup.object({
    new_password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Password must be Strong'
      ),
    new_password_confirmation: yup
      .string()
      .oneOf([yup.ref('new_password'), null], 'Passwords must match')
  });
  const resolver = useYupValidationResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver
  });

  const handleRedirect = () => {
    navigate('/');
  };

  const submit = (data) => {
    const token = searchParams.get('token');
    dispatch(resetPassword({ ...data, token: token }, handleRedirect));
  };

  const gotoSignup = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <AuthLayout isSignIn={false} heading="Reset Password">
      <form onSubmit={handleSubmit(submit)}>
        <PasswordField
          name={'new_password'}
          label="New Password"
          placeholder="Password here"
          register={register}
          isRequired
          error={errors.new_password}
        />
        <br />
        <PasswordField
          name={'new_password_confirmation'}
          register={register}
          label="Confirm Password"
          placeholder="Please confirm your password"
          isRequired
          error={errors.new_password_confirmation}
        />
        <br />
        {!loading && (
          <Button
            className={classes.submitButton}
            sx={{ fontSize: '16px', fontWeight: '700' }}
            variant="contained"
            type={'submit'}
            color="primary">
            Submit
          </Button>
        )}
        {loading && (
          <Button
            className={classes.submitButton}
            sx={{ fontSize: '16px', fontWeight: '700' }}
            variant="contained"
            type={'submit'}
            color="primary">
            <Typography className={classes.circularProgressText}>Loading</Typography>
            <CircularProgress size={20} sx={{ color: '#fff', marginLeft: '1.5rem' }} />
          </Button>
        )}

        <Typography className={classes.endText} align="center">
          Already have an account?{' '}
          <span onClick={gotoSignup} className={classes.blueSpan}>
            Sign In
          </span>
        </Typography>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
