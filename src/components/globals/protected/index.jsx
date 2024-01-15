import PropTypes from 'prop-types';

import { isLoggedIn } from '../../../utils';

const Protected = ({ children }) => {
  if (isLoggedIn()) {
    return children;
  }
  // return <Navigate to="/" replace />;
  return children;
};

export default Protected;

Protected.propTypes = {
  children: PropTypes.element
};
