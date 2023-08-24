import { Box } from '@mui/material';
import PasswordReset from 'components/globals/passwordReset';
import AuthLayout from 'layouts/authLayout';
import useStyles from './styles';

const ResetPassword = () => {
  const classes = useStyles();

  return (
    <AuthLayout sticky>
      <Box className={classes.root}>
        <Box className={classes.wrapper}>
          <PasswordReset />
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default ResetPassword;
