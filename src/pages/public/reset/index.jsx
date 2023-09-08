import { Box } from '@mui/material';
import PasswordReset from 'components/globals/passwordReset';
import useStyles from './styles';

const ResetPassword = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <PasswordReset />
      </Box>
    </Box>
  );
};

export default ResetPassword;
