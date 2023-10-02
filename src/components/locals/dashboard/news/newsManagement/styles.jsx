import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px'
  },
  rootNav: {
    background: '#276fc4'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& input': {
      height: '16px',
      background: '#5d9fee',
      color: '#fff',
      borderRadius: '4px'
    }
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
  },
  footerRoot: {
    padding: '0px 30px 30px 0'
  },
  listWrapper: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    '& li': {
      padding: '5px 20px',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.primary.light
      }
    }
  }
}));
