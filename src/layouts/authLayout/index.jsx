import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import CandidateNavbar from './CandidateNavbar';
import Footer from './Footer';
import NBNSNavbar from './NBNSNavbar';
import NCCNavbar from './NCCNavbar';
import Navbar from './Navbar';

const AuthLayout = ({ children, heading, isSignIn, sticky = false, userType }) => {
  return (
    <Box>
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
