import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: 'Euclid',
    '& .MuiBreadcrumbs-separator': {
      marginLeft: '3px',
      marginRight: '3px'
    }
  },
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& button': {
      marginLeft: '30px'
    }
  },
  btnColor: {
    backgroundColor: '#4E8AF4 !important',
    color: '#fff !important'
  },
  breadcrumbHeading: {
    fontSize: '14px !important',
    fontWeight: 600,
    fontFamily: 'Euclid',
    letterSpacing: '0.8px',
    lineHeight: '1.5rem'
  },
  breadcrumbItem: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Euclid',
    fontSize: '11px !important',
    fontWeight: '400',
    color: theme.palette.grey[6]
  },
  breadcrumbIcon: {}
}));

export default useStyles;
