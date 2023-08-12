import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    height: '3.8rem !important',
    marginTop: '0.8rem',
    padding: '0.5rem',
    size: '14px',
    fontFamily: 'Work Sans',
    border: `1px solid ${theme.palette.grey[4]}`,
    borderRadius: '2px',
    width: '100%',
    '&::placeholder': {
      fontFamily: 'Work Sans',
      fontWeight: '400',
      color: theme.palette.grey[5],
      marginLeft: '1.5rem'
    },
    '&:focus': {
      outline: '1px solid blue'
    }
  },
  requiredElement: {
    color: theme.palette.error.main,
    fontSize: '1.4rem'
  },
  label: {
    fontSize: '1.4rem',
    fontFamily: 'Work Sans',
    fontWeight: '500',
    color: theme.palette.pureDark
  },
  errorLabel: {
    fontSize: '1.4rem',
    fontFamily: 'Work Sans',
    fontWeight: '500',
    color: theme.palette.error.main
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  inputIcon: {
    position: 'absolute',
    marginLeft: '-3rem',
    marginTop: '-.5rem',
    fontSize: 'medium',
    color: 'red'
  },
  inputError: {
    border: '1px solid red',
    color: 'red'
  },
  inputIconError: {
    color: 'red'
  },
  helperMessage: {
    fontSize: '11px',
    fontFamily: 'Work Sans',
    marginTop: '0.3rem'
  }
}));

export default useStyles;
