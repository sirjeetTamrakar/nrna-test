import { Box, Typography } from '@mui/material';
import CustomBreadcrumbs from 'components/common/CustomBreadcrumbs/CustomBreadcrumbs';
import { NavLink, useLocation } from 'react-router-dom';
import AccountMenu from './AccountMenu';
import useStyles from './Styles';

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box className={classes.main}>
          {paths?.length ? paths?.slice(-1)?.toString()?.replaceAll('-', ' ') : 'Hi User!'}
        </Box>
        <Box className={classes.breadcrumbs}>
          {' '}
          <CustomBreadcrumbs data={{ color: '#fff' }} />
        </Box>
      </Box>

      <Box className={classes.right}>
        <AccountMenu />
      </Box>
    </Box>
  );
};

export default Navbar;

const LinkComponent = ({ row }) => {
  const classes = useStyles();
  return (
    <NavLink
      to={row?.url}
      className={({ isActive }) => {
        return isActive && classes.active;
      }}>
      <Typography>{row?.label}</Typography>
    </NavLink>
  );
};
