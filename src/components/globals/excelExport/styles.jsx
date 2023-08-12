import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  exportBtn: {
    background: theme.palette.primary.main,
    color: '#fff',
    marginTop: '15px',
    padding: '10px 25px',
    borderRadius: '4px',
    '&:hover': {
      background: theme.palette.primary.dark
    },
    '& svg': {
      marginRight: '10px'
    }
  }
}));

export default useStyles;
