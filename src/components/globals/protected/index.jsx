import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isLoggedIn } from '../../../utils';

const Protected = ({ children }) => {
  if (isLoggedIn()) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default Protected;

Protected.propTypes = {
  children: PropTypes.element
};
