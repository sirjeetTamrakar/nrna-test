import { makeStyles } from '@mui/styles';

const usestyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '24',
    p: '4',
    '&:focus-visible': {
      outline: 'none',
      border: 'none'
    }
  },
  modalHeader: {
    background: theme.palette.modalHead,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 2.5rem 2rem 3.8rem',
    height: '4.2rem',
    color: '#fff',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.18)'
  },
  modalHeaderText: {
    color: '#fff',
    fontFamily: 'Euclid',
    fontSize: '1.4rem',
    fontWeight: '600'
  },
  cancelItem: {
    cursor: 'pointer'
  },
  modalHeaderLight: {
    background: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 2.5rem 2rem 3.8rem',
    height: '4.2rem',
    color: '#fff',
    borderBottom: '1px solid #dbdbdd'
  },
  modalHeaderTextLight: {
    color: theme.palette.common.black,
    letterSpacing: '0.6px',
    fontFamily: 'Euclid',
    fontSize: '1.4rem',
    fontWeight: '600'
  },
  cancelItemLight: {
    cursor: 'pointer',
    color: theme.palette.grey[600]
  },
  modalBody: {
    padding: '0',
    // minHeight: '20rem',
    overflowY: 'scroll',
    maxHeight: '80vh'
  },
  modalFooter: {
    width: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    height: '4.9rem'
  },

  modalFooterCancel: {
    '&:hover': {
      background: '#ddd'
    }
  }
}));

export default usestyles;
