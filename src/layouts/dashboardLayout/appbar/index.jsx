import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactComponent as TransferLogo } from 'assets/images/transfer.svg';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'redux/auth/actions';
import useStyles from './styles';

// actual component here
const CustomAppBar = ({ setDrawerOpen, drawerOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.auth);

  const handleLanguageSwitch = () => {
    if (language == 'en') {
      dispatch(changeLanguage('pl'));
    } else {
      dispatch(changeLanguage('en'));
    }
  };

  // local styles
  const customStyles = {
    drawerOpen: {
      width: `calc(100% - ${217}px)`,
      marginLeft: `${217}px`,
      transition: 'all .3s ease'
    },
    drawerClose: {
      width: '100%',
      marginLeft: `0px`,
      transition: 'all .3s ease'
    }
  };
  const { user } = useSelector((state) => state.auth);

  return (
    <AppBar
      sx={drawerOpen ? customStyles.drawerOpen : customStyles.drawerClose}
      className={classes.root}
      position="fixed"
      open={true}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
          color="inherit"
          aria-label="open drawer"
          onClick={setDrawerOpen}
          edge="start">
          <TransferLogo background="#fff" />
        </IconButton>
        <Box className={classes.sideBox}>
          <Box></Box>
          <Box className={classes.avatarArea}>
            <Box className={classes.avatar}>{user?.name.split(' ')[0][0]}</Box>
            <Typography className={classes.imageText} color={'#000'}>
              {user?.name}
            </Typography>
          </Box>
          <Box className={classes.language} onClick={handleLanguageSwitch}>
            <Typography color="secondary">{language}</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

CustomAppBar.propTypes = {
  setDrawerOpen: PropTypes.func,
  drawerOpen: PropTypes.bool
};
