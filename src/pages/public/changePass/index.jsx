import { Box } from '@mui/material';
import ChangePassword from 'components/globals/changePassword';
import useStyles from './styles';

const ChnagePasswordDashboard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <ChangePassword />
      </Box>
    </Box>
  );
};

export default ChnagePasswordDashboard;
