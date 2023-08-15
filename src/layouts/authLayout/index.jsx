import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import CandidateNavbar from './CandidateNavbar';
import Footer from './Footer';
import NBNSNavbar from './NBNSNavbar';
import NCCNavbar from './NCCNavbar';
import Navbar from './Navbar';
import useStyles from './styles';

const AuthLayout = ({ children, heading, isSignIn, sticky = false, userType }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {userType === 'candidate' ? (
        <CandidateNavbar sticky={sticky} />
      ) : userType === 'ncc' ? (
        <NCCNavbar sticky={sticky} />
      ) : userType === 'nbns' ? (
        <NBNSNavbar sticky={sticky} />
      ) : (
        <Navbar sticky={sticky} />
      )}
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
