import { ExpandMore } from '@mui/icons-material';
import { Box, Collapse, Typography } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Logo from 'assets/images/nrna.png';
import { SidebarConstants } from 'constants/SidebarConstants';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(sessionStorage.getItem('active'));

  const handleClick = (item) => {
    sessionStorage.setItem('active', open === item?.label ? '' : item?.label);
    setOpen((prev) => (prev === item?.label ? '' : item?.label));
  };

  const { user, role_details } = useSelector((state) => state.auth);

  return (
    <Box sx={{ display: 'flex', '& .MuiDrawer-paper': { border: 'none' } }}>
      <Drawer variant="permanent" open>
        <Box className={classes.drawer}>
          <DrawerHeader>
            <Box className={classes.drawerHeader}>
              <img src={Logo} />
            </Box>
          </DrawerHeader>

          <NavBarByRoles role_details={role_details} user={user} handleClick={handleClick} />
          <NavBarByRoleNCC role_details={role_details} user={user} handleClick={handleClick} />

          {user?.role_name !== 'ncc' &&
            SidebarConstants?.map((row, index) => (
              <List
                key={row?.header}
                subheader={<Box sx={{ fontSize: '11px', padding: '5px 12px' }}>{row?.header} </Box>}
                sx={{ mb: '1rem' }}>
                {row?.items?.map((item, index) => {
                  const filterData = item?.roles?.includes(user?.role_name);
                  if (filterData) {
                    return (
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
                                    transform:
                                      open === item?.label ? 'rotate(-180deg)' : 'rotate(0deg)'
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
                    );
                  } else return false;
                })}
              </List>
            ))}
        </Box>
      </Drawer>
    </Box>
  );
}

const NavBarByRoles = ({ role_details, user, handleClick }) => {
  const classes = useStyles();

  return (
    <>
      {user?.role_name === 'ncc' &&
        role_details === 'member' &&
        SidebarConstants?.map((row, index) => (
          <List
            key={row?.header}
            subheader={<Box sx={{ fontSize: '11px', padding: '5px 12px' }}>{row?.header} </Box>}
            sx={{ mb: '1rem' }}>
            {row?.items?.map((item, index) => {
              const filterData = item?.memberProfile?.includes('memberProfile');
              if (filterData) {
                return (
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
                );
              } else return false;
            })}
          </List>
        ))}{' '}
    </>
  );
};
const NavBarByRoleNCC = ({ role_details, user, handleClick }) => {
  const classes = useStyles();

  return (
    <>
      {user?.role_name === 'ncc' &&
        role_details === 'ncc' &&
        SidebarConstants?.map((row, index) => (
          <List
            key={row?.header}
            subheader={<Box sx={{ fontSize: '11px', padding: '5px 12px' }}>{row?.header} </Box>}
            sx={{ mb: '1rem' }}>
            {row?.items?.map((item, index) => {
              const filterData = item?.memberProfileNCC?.includes('memberProfileNCC');
              if (filterData) {
                return (
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
                          <ChildComponentNCC child={child} key={index} classes={classes} />
                        ))}
                      </Box>
                    </Collapse>
                  </ListItem>
                );
              } else return false;
            })}
          </List>
        ))}{' '}
    </>
  );
};

const ChildComponentNCC = ({ child, classes }) => {
  const { user } = useSelector((state) => state.auth);
  const filterData = child?.roles?.includes(user?.role_name);
  if (filterData) {
    return (
      <>
        <List
          key={child?.label}
          component="div"
          disablePadding
          sx={{ paddingBottom: '5px' }}
          className={classes.nav}>
          <NavLink to={child?.url}>
            {({ isActive }) => (
              <ListItemButton
                className={[classes.listItemButtonChild, isActive && classes.activeChildClass]}>
                <ListItemText
                  disableTypography
                  primary={<Typography variant="body2">{child?.label}</Typography>}
                  className="active"
                  primaryTypographyProps="h2"
                />
              </ListItemButton>
            )}
          </NavLink>
        </List>
      </>
    );
  } else return false;
};

const ChildComponent = ({ child, classes }) => {
  const { user } = useSelector((state) => state.auth);
  const filterData = child?.roles?.includes(user?.role_name);
  if (filterData) {
    return (
      <>
        <List
          key={child?.label}
          component="div"
          disablePadding
          sx={{ paddingBottom: '5px' }}
          className={classes.nav}>
          <NavLink to={child?.url}>
            {({ isActive }) => (
              <ListItemButton
                className={[classes.listItemButtonChild, isActive && classes.activeChildClass]}>
                <ListItemText
                  disableTypography
                  primary={<Typography variant="body2">{child?.label}</Typography>}
                  className="active"
                  primaryTypographyProps="h2"
                />
              </ListItemButton>
            )}
          </NavLink>
        </List>
      </>
    );
  } else return false;
};
