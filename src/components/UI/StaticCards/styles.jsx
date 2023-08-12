import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    borderRadius: '0px !important',
    border: '2px solid #E5E5EB',
    boxShadow: 'none !important',
    padding: '1.5rem 1rem',
    '& .icon': {
      width: '7.5rem',
      height: '7.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.grey[2],
      borderRadius: '50%',
      '& svg': {
        fontSize: '4rem',
        color: theme.palette.grey[6]
      },
      '& .MuiCardContent-root:last-child': {
        paddingBottom: 0
      }
    },
    '& .underlineText:hover': {
      textDecoration: 'underline'
    },
    '& .number': {
      fontWeight: 'bold',
      fontSize: '32px !important'
    },
    '& .subTitle': {
      fontSize: '16px !important'
    }
  }
}));

export default useStyles;
