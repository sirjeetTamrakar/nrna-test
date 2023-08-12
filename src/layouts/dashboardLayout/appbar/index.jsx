import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactComponent as TransferLogo } from 'assets/images/transfer.svg';
import PropTypes from 'prop-types';
import useStyles from './styles';

// actual component here
const CustomAppBar = ({ setDrawerOpen, drawerOpen }) => {
  const classes = useStyles();

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
            <Box className={classes.avatar}>Image</Box>
            <Typography className={classes.imageText} color={'#000'}>
              Name
            </Typography>
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
