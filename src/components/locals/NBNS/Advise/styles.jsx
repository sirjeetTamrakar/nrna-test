import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 60px ',
    marginTop: '60px'
  },
  headerWrapper: {},
  formContainer: {
    padding: '30px 45px 30px',
    border: '1px solid grey',
    marginTop: '30px',
    borderRadius: '5px'
  },
  title: {
    fontSize: '32px !important',
    fontWeight: '700 !important',
    textAlign: 'center'
  },
  formTitle: {
    fontSize: '22px !important',
    fontWeight: '600 !important',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '20px !important',
    fontWeight: '500 !important',
    textAlign: 'center',
    color: '#575757'
  },
  description: {
    fontSize: '14px !important',
    marginBottom: '20px !important',
    textAlign: 'center'
  }
}));

export default useStyles;
