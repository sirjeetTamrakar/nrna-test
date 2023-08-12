import { Box, Button, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import CustomModal from '.';
import useStyles from './styles';

const CancelModal = ({ handleClose, cancelFunction, cancelOpen, title }) => {
  const classes = useStyles();
  const handleCancelModal = () => {
    cancelFunction();
    handleClose();
  };
  return (
    <CustomModal
      open={cancelOpen}
      handleClose={cancelFunction}
      height="auto"
      width="30rem"
      headerText="">
      <Box padding={5}>
        <Typography variant="h5" textAlign="center">
          {title ? (
            title
          ) : (
            <FormattedMessage id="Do you want to cancel?" defaultMessage="Do you want to cancel?" />
          )}
        </Typography>
      </Box>
      <Box className={classes.modalFooter}>
        <Button variant={'contained'} onClick={handleCancelModal}>
          {<FormattedMessage id="Yes" defaultMessage="Yes" />}
        </Button>
        <Button className={classes.modalFooterCancel} variant={'outlined'} onClick={cancelFunction}>
          {<FormattedMessage id="No" defaultMessage="No" />}
        </Button>
      </Box>
    </CustomModal>
  );
};
export default CancelModal;
