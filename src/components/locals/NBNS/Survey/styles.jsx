import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '60px',
    height: 'calc(100vh - 60px)'
  },
  headerWrapper: {
    marginTop: '30px',
    padding: '60px',
    background: '#cae7ff',
    borderRadius: '5px'
  },
  title: {
    fontSize: '32px !important',
    fontWeight: '700 !important',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '20px !important',
    fontWeight: '500 !important',
    textAlign: 'center',
    color: '#575757'
  },
  description: {
    fontSize: '16px !important'
  }
}));

export default useStyles;
