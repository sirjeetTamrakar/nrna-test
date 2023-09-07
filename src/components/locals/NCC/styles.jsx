import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#276fc4'
  },
  title: {
    fontSize: '24px !important',
    color: '#fff',
    fontWeight: '600 !important',
    lineHeight: '80% !important'
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    columnGap: '45px',
    margin: 0,
    padding: 0,
    '& li': {
      fontSize: '14px',
      color: '#fff',
      fontWeight: '400',
      paddingBottom: '5px',
      cursor: 'pointer',
      '&.active': {
        borderBottom: '4px solid #fff'
      }
    }
  }
}));
