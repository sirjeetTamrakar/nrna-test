import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SegmentIcon from '@mui/icons-material/Segment';
import { Box } from '@mui/material';
import Logo from 'assets/images/nrna.png';
import BusinessIcon from 'assets/navicons/business.svg';
import EventIcon from 'assets/navicons/events.svg';
import HomeIcon from 'assets/navicons/home.svg';
import NBNSIcon from 'assets/navicons/nbns.svg';
import NCCIcon from 'assets/navicons/ncc.svg';
import NewsIcon from 'assets/navicons/news.svg';
import TeamIcon from 'assets/navicons/team.svg';
import CustomModal from 'components/common/CustomModal/CustomModal';
import Login from 'components/globals/login';
import Register from 'components/globals/register';
import useToggle from 'hooks/useToggle';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/actions';
import { isLoggedIn } from 'utils';
import useStyles from './styles';

function Navbar({ isHomePage, currentUser, sticky }) {
  const navigate = useNavigate();

  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const openNav = () => {
    setIsSidenavOpen(true);
  };

  const closeNav = () => {
    setIsSidenavOpen(false);
  };
  const classes = useStyles();
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  const [open, openFunction] = useToggle(false);
  const [openRegister, openFunctionRegister] = useToggle(false);

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsSidenavOpen(false);
  };

  const handleLoginClick = () => {
    closeNav();
    openFunction();
  };

  const handleRegisterClick = () => {
    closeNav();
    openFunctionRegister();
  };

  const handleLogout = () => {
    logout();
    navigate(`/`);
    closeNav();
  };

  const sideNavItems = [
    { title: 'Home', link: '/', value: '/' },
    { title: 'NFEA', link: 'foreign-employment', value: '/foreign-employment' },
    { title: 'Our Team', link: '/our-team', value: '/our-team' },
    { title: 'Business', link: '/business', value: '/business' },
    { title: 'NCC', link: '/ncc', value: '/ncc' },
    { title: 'News', link: '/news', value: '/news' },
    { title: 'Events', link: '/events', value: '/events' },
    { title: 'Contact', link: '/foreign-employment/contact', value: '/foreign-employment/contact' }
  ];

  return (
    <>
      <div className={`Navbar navbar_sticky`} id="nav">
        <div className="container">
          <div className="Navbar_wrapper">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="d-flex align-items-center" style={{ gridColumnGap: '1rem' }}>
                <div className="logo_wrapper">
                  <img style={{ height: '45px', width: 'auto' }} src={Logo} alt="Logo" />
                </div>
              </div>
            </Link>

            <ul className="nav_wrapper">
              <li className={` d-none d-lg-block menu_items`}>
                <Link to="/" className={classes.navIcon}>
                  <img src={HomeIcon} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="d-none d-lg-block menu_items">
                <Link to="/foreign-employment" className={classes.navIcon}>
                  <img src={NBNSIcon} />
                  <span>NFEA</span>
                </Link>
              </li>
              <li className="d-none d-lg-block menu_items">
                <Link to="/our-team" className={classes.navIcon}>
                  <img src={TeamIcon} />
                  <span>Our Team</span>
                </Link>
              </li>

              <li className="d-none d-lg-block menu_items">
                <Link to="/business" className={classes.navIcon}>
                  <img src={BusinessIcon} />
                  <span>Business</span>
                </Link>
              </li>
              <li className="d-none d-lg-block menu_items">
                <Link to="/ncc" className={classes.navIcon}>
                  <img src={NCCIcon} />
                  <span>NCC</span>
                </Link>
              </li>
              <li className="d-none d-lg-block menu_items">
                <Link to="/news" className={classes.navIcon}>
                  <img src={NewsIcon} />
                  <span>News</span>
                </Link>
              </li>
              <li className="d-none d-lg-block menu_items">
                <Link to="/events" className={classes.navIcon}>
                  <img src={EventIcon} />
                  <span>Events</span>
                </Link>
              </li>
              <li className="navbar-dashboard-btn">
                {isLoggedIn() ? (
                  <button className="btn-md" onClick={goToDashboard}>
                    Dashboard
                  </button>
                ) : (
                  <Box display="flex" justifyContent="flex-start" columnGap="10px">
                    <button className="btn-md" onClick={openFunction}>
                      <PersonIcon /> Login
                    </button>
                    <button className="btn-md-contained" onClick={openFunctionRegister}>
                      <PersonAddIcon /> Join Us
                    </button>
                  </Box>
                )}
              </li>

              <li className="d-block d-xl-none hamburger_icon">
                <span onClick={() => openNav()}>
                  <SegmentIcon sx={{ fontSize: '2rem !important' }} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mySidenav" className={`sidenav ${isSidenavOpen ? 'open' : ''}`}>
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        {sideNavItems?.map((item, index) => {
          return (
            <Link
              key={index}
              to={item?.link}
              onClick={() => handleLinkClick(item?.value)}
              className={activeLink === item?.value ? 'active' : ''}>
              {item?.title}
            </Link>
          );
        })}
        {isLoggedIn() ? (
          <Box className="sideNavRegisterBox" sx={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <button
                style={{ color: '#276FC4', border: '1px solid #276FC4', marginBottom: '5px' }}
                className="btn-md col-6"
                onClick={goToDashboard}>
                Dashboard
              </button>
            </div>
            <button className="col-6 btn-md sidebarLogin" onClick={() => handleLogout()}>
              <LogoutIcon />
              Logout
            </button>
          </Box>
        ) : (
          <Box className="sideNavRegisterBox">
            <button className="col-6 btn-md sidebarLogin" onClick={handleLoginClick}>
              <PersonIcon /> Login
            </button>
            <button
              className="col-6 btn-md-contained sidebarRegister"
              onClick={handleRegisterClick}>
              <PersonAddIcon /> Join Us
            </button>
          </Box>
        )}
        {/* <Box className="sideNavRegisterBox">
          <button className="col-6 btn-md sidebarLogin" onClick={handleLoginClick}>
            <PersonIcon /> Login
          </button>
          <button className="col-6 btn-md-contained sidebarRegister" onClick={handleRegisterClick}>
            <PersonAddIcon /> Join Us
          </button>
        </Box> */}
        {/* <a href="#" className="btn-md">
          Back To Home
        </a> */}
      </div>
      <CustomModal open={open} handleClose={openFunction} width={`20rem`}>
        <Login handleClose={openFunction} registerOpen={openFunctionRegister} />
      </CustomModal>
      <CustomModal open={openRegister} handleClose={openFunctionRegister} width={`20rem`}>
        <Register handleClose={openFunctionRegister} loginOpen={openFunction} />
      </CustomModal>
    </>
  );
}

export default Navbar;
