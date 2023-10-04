import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person4Icon from '@mui/icons-material/Person4';
import PublicIcon from '@mui/icons-material/Public';
import Settings from '@mui/icons-material/Settings';
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import IconTooltip from 'components/common/CustomTooltips/IconTooltip';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, saveRoleDetails } from 'redux/auth/actions';
import useStyles from './Styles';

export default function AccountMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [changeEl, setChangeEl] = useState(null);
  const [userRole, setUserRole] = useState('member');
  const { user, role_details } = useSelector((state) => state.auth);
  console.log({ role_details, userRole });

  const open = Boolean(anchorEl);
  const roleOpen = Boolean(changeEl);

  const navigate = useNavigate();
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRoleClick = (event) => {
    setChangeEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRoleClose = () => {
    setChangeEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate(`/`);
  };

  const handlePasswordChange = () => {
    navigate(`/password-reset`);
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleRoleNcc = () => {
    userRole === 'member' && setUserRole('ncc');
  };
  const handleRoleMember = () => {
    userRole === 'ncc' && setUserRole('member');
  };
  useEffect(() => {
    dispatch(saveRoleDetails(userRole));
  }, [userRole]);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <IconTooltip data={{ title: 'Notification', icon: <NotificationsOutlinedIcon /> }} />
        <IconTooltip data={{ title: 'Help', icon: <HelpOutlineOutlinedIcon /> }} />

        {/* <input type="color" onChange={(e) => handleColorChange(e)} /> */}
        <Box className={classes.userWrapper}>
          {user?.role_name === 'ncc' && (
            <Tooltip title="Switch User Mode">
              <IconButton
                onClick={handleRoleClick}
                size="small"
                aria-controls={roleOpen ? 'role-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={roleOpen ? 'true' : undefined}>
                <ChangeCircleIcon />
              </IconButton>
            </Tooltip>
          )}
          <Box>
            <p className={classes.name}>{user?.full_name} </p>
            {user?.role_name === 'ncc' && (
              <p className={classes.role} style={{ width: '100px' }}>
                {role_details === 'member' ? 'Personal Profile' : 'NCC'}{' '}
              </p>
            )}
          </Box>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <Avatar sx={{ width: 32, height: 32 }}>
                <img
                  src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1677817259~exp=1677817859~hmac=889759eb12ed9ba12b130c6593041de22ccdae866391831762a29aa17f36e0c0"
                  alt="Profile Image"
                  style={{ objectFit: 'cover' }}
                  height="32"
                  width="32"
                />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        <Button
          onClick={goToHome}
          variant="outlined"
          sx={{ minWidth: '30px !important', padding: '20px 13px !important' }}>
          <HomeIcon />
        </Button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handlePasswordChange}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Change Password
        </MenuItem>
        <MenuItem onClick={() => handleLogout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={changeEl}
        id="role-menu"
        open={roleOpen}
        onClose={handleRoleClose}
        onClick={handleRoleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.12))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handleRoleNcc}>
          <ListItemIcon>
            <PublicIcon fontSize="small" />
          </ListItemIcon>
          NCC
        </MenuItem>
        <MenuItem onClick={handleRoleMember}>
          <ListItemIcon>
            <Person4Icon fontSize="small" />
          </ListItemIcon>
          Personal Profile
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
