import { Box } from '@mui/material';
import ForgotPassword from 'components/globals/forgotPassword';
import AuthLayout from 'layouts/authLayout';
import useStyles from './styles';

const Forgot = () => {
  const classes = useStyles();
  return (
    <AuthLayout sticky>
      <Box className={classes.root}>
        <Box className={classes.wrapper}>
          <ForgotPassword />
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default Forgot;
