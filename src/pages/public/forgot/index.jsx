import { Box } from '@mui/material';
import ForgotPassword from 'components/globals/forgotPassword';
import useStyles from './styles';

const Forgot = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <ForgotPassword />
      </Box>
    </Box>
  );
};

export default Forgot;
