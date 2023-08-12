import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  navWrapper: {
    marginBottom: '1rem',
    '& li': {
      listStyleType: 'none',
      display: 'inline'
    },
    '& div': {
      display: 'inline',
      margin: '6px 13px 6px 0px',
      position: 'relative'
    },
    '& .text': {
      fontSize: '11px',
      color: theme.palette.grey[1],
      textTransform: 'capitalize'
    },
    '& .lastElement': {
      fontSize: '12px',
      color: '#383751',
      textTransform: 'capitalize'
    },
    '& svg': {
      position: 'absolute',
      left: '-13px',
      top: '-2px'
    },
    '& ol': {
      padding: 0,
      margin: 0
    }
  }
}));

export default useStyles;
