import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
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
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/actions';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate(`/`);
  };

  const goToHome = () => {
    navigate('/');
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <IconTooltip data={{ title: 'Notification', icon: <NotificationsOutlinedIcon /> }} />
        <IconTooltip data={{ title: 'Help', icon: <HelpOutlineOutlinedIcon /> }} />

        {/* <input type="color" onChange={(e) => handleColorChange(e)} /> */}

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
        <MenuItem onClick={handleClose}>
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
    </React.Fragment>
  );
}
