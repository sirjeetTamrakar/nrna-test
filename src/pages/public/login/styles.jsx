import { makeStyles } from '@mui/styles';

const usestyles = makeStyles((theme) => ({
  submitButton: {
    height: '3.7rem',
    width: '100%'
  },
  endText: {
    marginTop: '0.9rem !important',
    fontWeight: '500 !important',
    fontSize: '1.5rem !important',
    fontFamily: 'Work Sans !important',
    color: theme.palette.grey[6]
  },
  blueSpan: {
    color: '#496AD0',
    cursor: 'pointer'
  },
  circularProgressText: { textTransform: 'none', fontSize: '1.3rem !important' }
}));

export default usestyles;
