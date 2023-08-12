import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';
import useStyles from './styles';

const AuthLayout = ({ children, heading, isSignIn }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
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
