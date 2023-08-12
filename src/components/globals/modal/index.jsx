import { Box } from '@mui/system';
import useStyles from './styles';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { Modal } from '@mui/material';

const CustomModal = ({
  headerText,
  open,
  handleClose,
  children,
  width,
  height,
  variant = 'dark'
}) => {
  const classes = useStyles();

  const customModalStyles = {
    width: width || '74.4rem',
    height: height || '34.1rem',
    display: 'flex',
    flexDirection: 'column',
    background: '#F9F9FB'
  };

  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={{ ...customModalStyles }} className={classes.root}>
        <Box className={variant == 'light' ? classes.modalHeaderLight : classes.modalHeader}>
          <Box
            className={variant == 'light' ? classes.modalHeaderTextLight : classes.modalHeaderText}>
            {headerText}
          </Box>
          <CancelIcon
            onClick={handleClose}
            className={variant == 'light' ? classes.cancelItemLight : classes.cancelItem}
          />
        </Box>
        <Box className={classes.modalBody}>{children}</Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;

CustomModal.propTypes = {
  headerText: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string
};

CustomModal.defaultProps = {
  headerText: 'This is a default header'
};
