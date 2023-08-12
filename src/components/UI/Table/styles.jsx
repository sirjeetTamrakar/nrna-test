import { makeStyles } from '@mui/styles';

const usestyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
  },
  tableHead: {
    background: theme.palette.lightGrey[3],
    height: '3.4rem !important'
  },
  tableHeadItem: {
    fontWeight: '600',
    fontSize: '1.2rem',
    color: theme.palette.tableHead,
    letterSpacing: '0.03em',
    padding: '1.2rem 1rem'
    // display: 'flex'
  },
  tableHeadSpan: {
    position: 'relative',
    width: '3rem',
    height: '3rem',
    ':&>*': {
      //   margin: '10px 4px'
    }
  },
  arrowIcon1: {
    position: 'absolute',
    top: '-8px',
    cursor: 'pointer',
    fontSize: '20px',
    '&:hover': {
      color: '#fff'
    }
  },
  arrowIcon2: {
    position: 'absolute',
    bottom: '-8px',
    cursor: 'pointer',
    fontSize: '20px',
    '&:hover': {
      color: '#fff'
    }
  },
  tableItem: {
    fontFamily: 'Work Sans !important',
    fontWeight: '400 !important',
    fontSize: '1.4rem !important',
    color: '#171C26',
    padding: '1rem'
  },
  iconWrapper: {
    '& svg': {
      marginRight: '1.5rem',
      color: theme.palette.grey[600],
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary
      }
    }
  },
  modalFooter: {
    width: '100%',
    marginTop: 'auto',
    marginLeft: 'auto',
    background: '#fff',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem 3rem',
    height: '4.9rem'
  },
  modalFooterButtons: {
    fontFamily: 'Euclid',
    ':&>*': {
      margin: '0 1rem'
    }
  },
  modalFooterCancel: {
    '&:hover': {
      background: '#ddd'
    }
  },
  contentWrap: {
    padding: '0rem 1.5rem'
  },
  rootTab: {
    background: '#fff',
    padding: '0 3.5rem',
    minHeight: '3.8rem',
    '& button': {
      minHeight: '3.8rem',
      fontSize: '1.2rem',
      textTransform: 'capitalize',
      fontWeight: 600,
      padding: '0',
      marginRight: '5rem',
      letterSpacing: '0.6px'
    }
  },
  viewRootTab: {
    background: '#fff',
    padding: '0 3.5rem',
    minHeight: '3.8rem',
    '& button': {
      minHeight: '3.8rem',
      fontSize: '1.2rem',
      textTransform: 'capitalize',
      fontWeight: 600,
      padding: '0',
      marginRight: '2rem',
      letterSpacing: '0.6px'
    }
  },
  fullname: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  departmentBtn: {
    marginTop: '2rem',
    '& button': {
      padding: '0.7rem 0',
      minWidth: '4rem'
    }
  }
}));

export default usestyles;
