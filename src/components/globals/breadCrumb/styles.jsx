import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: 'Euclid',
    padding: '1.3rem 4.5rem',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    background: '#f9f9fb',
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
