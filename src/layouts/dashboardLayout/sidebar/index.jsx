import { Add, ExpandMore, Sync } from '@mui/icons-material';
import { Collapse, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Logo from 'assets/images/nrna.png';
import { SidebarConstants } from 'constants/SidebarConstants';
import * as React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useStyles from './styles';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default function Sidebar() {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(sessionStorage.getItem('active'));
  const handleClick = (item) => {
    sessionStorage.setItem('active', open === item?.label ? '' : item?.label);
    setOpen((prev) => (prev === item?.label ? '' : item?.label));
  };

  return (
    <Box sx={{ display: 'flex', '& .MuiDrawer-paper': { border: 'none' } }}>
      <CssBaseline />

      <Drawer variant="permanent" open>
        <Box className={classes.drawer}>
          <DrawerHeader>
            <Box className={classes.drawerHeader}>
              <img src={Logo} />
              <Box>
                <Typography fontWeight={600} fontSize={'medium'} sx={{ lineHeight: 1 }}>
                  Scodus Innovation
                </Typography>

                <Typography fontWeight={500} fontSize={'11px'}>
                  Dillibazar, Kathmandu
                </Typography>
              </Box>
            </Box>
          </DrawerHeader>

          {SidebarConstants?.map((row, index) => (
            <List
              key={row?.header}
              subheader={<Box sx={{ fontSize: '11px', padding: '5px 12px' }}>{row?.header} </Box>}
              sx={{ mb: '1rem' }}>
              {row?.items?.map((item, index) => (
                <ListItem
                  key={item?.label}
                  disablePadding
                  sx={{ display: 'block', paddingBottom: '5px' }}
                  className={classes.nav}>
                  <NavLink
                    to={!item?.children?.length && item?.url}
                    className={({ isActive }) =>
                      isActive &&
                      (item?.children?.length
                        ? item?.children?.some((nestedItem) =>
                            window.location.pathname.includes(nestedItem.url)
                          )
                          ? classes.activeClass
                          : {}
                        : classes.activeClass)
                    }>
                    {({ isActive }) => (
                      <ListItemButton
                        className={classes.listItemButton}
                        onClick={() =>
                          item?.children?.length !== 0 ? handleClick(item) : handleClick()
                        }
                        style={{
                          background: open === item?.label && '#f6f6f6'
                        }}>
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 2,
                            justifyContent: 'center'
                          }}>
                          <img
                            style={{ height: '20px', width: '20px' }}
                            src={
                              isActive
                                ? item?.children?.length
                                  ? item?.children?.some((nestedItem) =>
                                      window.location.pathname.includes(nestedItem.url)
                                    )
                                    ? item?.activeIcon
                                    : item?.icon
                                  : item?.activeIcon
                                : item?.icon
                            }
                          />
                        </ListItemIcon>

                        <ListItemText primary={item?.label} />
                        {item?.children?.length !== 0 && (
                          <ExpandMore
                            sx={{
                              transition: 'transform 0.3s',
                              transform: open === item?.label ? 'rotate(-180deg)' : 'rotate(0deg)'
                            }}
                          />
                        )}
                      </ListItemButton>
                    )}
                  </NavLink>

                  <Collapse in={open === item?.label} timeout="auto" unmountOnExit>
                    <Box className={classes.childContainer}>
                      {item?.children?.map((child, index) => (
                        <ChildComponent child={child} key={index} classes={classes} />
                      ))}
                    </Box>
                  </Collapse>
                </ListItem>
              ))}

              {row?.header?.toLowerCase() === 'settings' && (
                <ListItem
                  disablePadding
                  sx={{
                    display: 'block',
                    // paddingBottom: "5px",
                    backgroundColor: '#f3f3f3',
                    marginTop: '0px'
                    // boxShadow: "5px 5px 5px 2px #f3f3f3",
                  }}
                  className={classes.nav}>
                  <NavLink to={'/'}>
                    <ListItemButton>
                      <ListItemIcon style={{ minWidth: '30px' }}>
                        <Sync style={{ color: '#121127' }} />
                      </ListItemIcon>
                      <ListItemText primary={'Go to Home'} style={{ fontSize: '13px' }} />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              )}
            </List>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}

const ChildComponent = ({ child, classes }) => {
  const navigate = useNavigate();
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = (url) => {
    alert(url);
    navigate(url);
  };

  return (
    <>
      <List
        key={child?.label}
        component="div"
        disablePadding
        sx={{ paddingBottom: '5px' }}
        className={classes.nav}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}>
        <NavLink to={child?.url}>
          {({ isActive }) => (
            <ListItemButton
              className={[classes.listItemButtonChild, isActive && classes.activeChildClass]}>
              <ListItemText primary={child?.label} className="active" />
              <IconButton
                onClick={() => (child?.pageUrl ? navigate(`/`) : handleOpen())}
                className={classes.iconButton}
                sx={{
                  visibility: hover ? 'visible' : 'hidden'
                }}>
                {<Add />}
              </IconButton>
            </ListItemButton>
          )}
        </NavLink>
      </List>
    </>
  );
};
