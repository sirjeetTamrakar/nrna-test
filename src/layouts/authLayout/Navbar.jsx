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
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn } from 'utils';
import useStyles from './styles';

function Navbar({ isHomePage, currentUser, sticky }) {
  const navigate = useNavigate();

  const [isSidenavOpen, setIsSidenavOpen] = useState(false); // State to track sidenav open/close
  const [activeLink, setActiveLink] = useState(null); // State to track the active link

  const openNav = () => {
    // Implement openNav logic here
    setIsSidenavOpen(true); // Open the sidenav
  };

  const closeNav = () => {
    // Implement closeNav logic here
    setIsSidenavOpen(false); // Close the sidenav
  };
  const classes = useStyles();

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
    closeNav(); // Close the sidenav when "Login" is clicked
    openFunction(); // Open the login modal
  };

  const handleRegisterClick = () => {
    closeNav(); // Close the sidenav when "Register" is clicked
    openFunctionRegister(); // Open the register modal
  };

  const sideNavItems = [
    { title: 'Home', link: '/', value: 'home' },
    { title: 'NBNS', link: '/nbns', value: 'nbns' },
    { title: 'Our Team', link: '/our-team', value: 'our-team' },
    { title: 'Business', link: '/business', value: 'business' },
    { title: 'NCC', link: '/ncc', value: 'ncc' },
    { title: 'News', link: '/news', value: 'news' },
    { title: 'Events', link: '/events', value: 'events' },
    { title: 'Contact', link: '/nrna/contact', value: 'contact' }
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
              <li className={` d-none d-lg-block`}>
                <Link to="/" className={classes.navIcon}>
                  <img src={HomeIcon} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/nbns" className={classes.navIcon}>
                  <img src={NBNSIcon} />
                  <span>NBNS</span>
                </Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/our-team" className={classes.navIcon}>
                  <img src={TeamIcon} />
                  <span>Our Team</span>
                </Link>
              </li>

              <li className="d-none d-lg-block">
                <Link to="/business" className={classes.navIcon}>
                  <img src={BusinessIcon} />
                  <span>Business</span>
                </Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/ncc" className={classes.navIcon}>
                  <img src={NCCIcon} />
                  <span>NCC</span>
                </Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/news" className={classes.navIcon}>
                  <img src={NewsIcon} />
                  <span>News</span>
                </Link>
              </li>
              <li className="d-none d-lg-block">
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

              <li className="d-block d-lg-none">
                <span onClick={() => openNav()}>
                  <SegmentIcon />
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

        <Box className="sideNavRegisterBox">
          <button className="col-6 btn-md sidebarLogin" onClick={handleLoginClick}>
            <PersonIcon /> Login
          </button>
          <button className="col-6 btn-md-contained sidebarRegister" onClick={handleRegisterClick}>
            <PersonAddIcon /> Join Us
          </button>
        </Box>
        {/* <a href="#" className="btn-md">
          Back To Home
        </a> */}
      </div>
      <CustomModal open={open} handleClose={openFunction} width={`22rem`}>
        <Login handleClose={openFunction} registerOpen={openFunctionRegister} />
      </CustomModal>
      <CustomModal open={openRegister} handleClose={openFunctionRegister} width={`22rem`}>
        <Register handleClose={openFunctionRegister} loginOpen={openFunction} />
      </CustomModal>
    </>
  );
}

export default Navbar;
