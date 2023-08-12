import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.8rem 4.5rem',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  optionWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  hyphen: {
    width: '2rem',
    fontSize: '1.6rem',
    fontWeight: 'lighter',
    textAlign: 'center'
  },
  select: {
    paddingLeft: '2rem',
    marginRight: '2rem',
    border: '0',
    borderLeft: `1px solid ${theme.palette.grey[400]}`,
    width: '18rem'
  },
  dateWrapper: {
    fontSize: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    marginRight: '2rem',
    '& .MuiInputBase-root': {
      background: theme.palette.grey[100],
      borderRadius: '3px',
      padding: '0px 10px 0px 0px'
    },
    '& input': {
      padding: '0.6rem 0.8rem !important',
      paddingRight: '0 !important',
      width: '7rem',
      fontSize: '1.2rem'
    },
    '& .MuiInputAdornment-root': {
      marginLeft: '0'
    }
  }
}));

export default useStyles;
