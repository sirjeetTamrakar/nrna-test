import { Box, Divider } from '@mui/material';
import { getCountries } from 'components/locals/dashboard/ncc/redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import SidebarDesk from './sidebar/SideBarDesk';
import useStyles from './styles';

const MainLayout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    // dispatch(getAllUsers());
  }, []);

  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box className={classes.root}>
        <Box className="sidebarMobile">
          <Sidebar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
        </Box>
        <Box className="sidebarDesk">
          <SidebarDesk />
        </Box>
        <Box sx={{ background: '#F9F9FB', width: '100%' }}>
          <Box sx={{ paddingInline: '46px' }}>
            <Navbar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
          </Box>
          <Divider />
          <Box className={classes.content}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
