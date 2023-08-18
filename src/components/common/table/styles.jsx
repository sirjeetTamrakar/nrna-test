import { makeStyles } from '@mui/styles';

const usestyles = makeStyles((theme) => ({
  root: {
    // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
  },
  tableHead: {
    background: '#4d4d4d',
    height: '3.4rem !important'
  },
  tableHeadItem: {
    fontWeight: '600',
    fontSize: '12px',
    color: '#fff !important',
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
    fontSize: '14px !important',
    '&:hover': {
      color: '#fff'
    }
  },
  arrowIcon2: {
    position: 'absolute',
    bottom: '-8px',
    cursor: 'pointer',
    fontSize: '14px !important',
    '&:hover': {
      color: '#fff'
    }
  },
  tableItem: {
    fontFamily: 'Work Sans !important',
    fontWeight: '400 !important',
    fontSize: '12px !important',
    color: '#171C26',
    padding: '1rem'
  },
  paginationBox: {
    fontSize: '12px'
  }
}));

export default usestyles;
