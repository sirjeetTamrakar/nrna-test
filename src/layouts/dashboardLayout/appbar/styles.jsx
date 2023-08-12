import { makeStyles } from '@mui/styles';

const usestyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff !important',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25) !important'
  },
  sideBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarArea: {
    marginLeft: 'auto !important',
    display: 'flex',
    alignItems: 'center',

    '&>*': {
      margin: '0rem 1rem'
    }
  },
  avatar: {
    width: '2.6rem !important',
    height: '2.6rem !important',
    borderRadius: '2px !important',
    background: theme.palette.blue,
    color: '#fff',
    fontSize: '1.6rem',
    paddingLeft: '7px'
  },
  imageText: {
    fontFamily: 'Euclid',
    fontWeight: '500 !important',
    lineHeight: '16.48px !important',
    fontSize: '13px !important',
    margin: 0
  },
  language: {
    borderColor: theme.palette.blue,
    border: '1px solid',
    color: '#fff',
    padding: '6px',
    borderRadius: '4px',
    marginLeft: '10px',
    cursor: 'pointer'
  }
}));

export default usestyles;
