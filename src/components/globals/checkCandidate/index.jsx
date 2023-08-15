import PropTypes from 'prop-types';

const CheckCandidate = ({ children }) => {
  const candidate = false;
  if (candidate) {
    return children;
  }
};

export default CheckCandidate;

CheckCandidate.propTypes = {
  children: PropTypes.element
};
