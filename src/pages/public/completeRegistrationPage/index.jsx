import { Box } from '@mui/material';
import CompleteRegistration from 'components/globals/completeRegistration';
import useStyles from './styles';

const CompleteRegistrationPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <CompleteRegistration />
      </Box>
    </Box>
  );
};

export default CompleteRegistrationPage;
