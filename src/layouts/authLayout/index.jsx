import { Box } from '@mui/system';
import { ReactComponent as AuthLogo } from 'assets/images/auth_logo.svg';
import PropTypes from 'prop-types';
import useStyles from './styles';

const AuthLayout = ({ children, heading, isSignIn }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.authContainer}>
        <Box className={classes.authHead}>
          <Box className={classes.smallIcon} ml="325px" bgcolor="#E57171" />
          <Box className={classes.smallIcon} bgcolor="#3BAB7C" />
          <Box className={classes.smallIcon} bgcolor="#D2AF30" />
        </Box>
        <AuthLogo className={classes.authLogo} />
        <Box className={classes.authHeading}>{`${heading}`.toUpperCase()}</Box>
        <Box className={isSignIn ? classes.signInWrapper : classes.signUpWrapper}>{children}</Box>
      </Box>
    </Box>
  );
};

// proptypes definition
AuthLayout.propTypes = {
  children: PropTypes.element,
  heading: PropTypes.string,
  isSignIn: PropTypes.bool
};

// default props
AuthLayout.defaultProps = {
  heading: 'Sign IN',
  isSignIn: true
};
export default AuthLayout;
