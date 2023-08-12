import { Button, CircularProgress, Typography } from '@mui/material';
import InputField from 'components/globals/inputField';
import AuthLayout from 'layouts/authLayout';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from 'hooks/useYupValidationResolver';

import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from 'redux/auth/actions';
const Forgot = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const schema = yup.object({
    email: yup.string().email().required()
  });
  const resolver = useYupValidationResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver
  });

  const handleRedirect = () => {
    navigate('/');
    reset();
  };

  const submit = (data) => {
    dispatch(forgotPassword(data, handleRedirect));
  };

  const gotoSignup = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <AuthLayout isSignIn={false} heading="Forgot Password">
      <form onSubmit={handleSubmit(submit)}>
        <InputField
          label="Email address"
          name="email"
          register={register}
          placeholder="Email here"
          isRequired
          error={errors.email}
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

export default Forgot;
