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
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn } from 'utils';
import useStyles from './styles';

function Navbar({ isHomePage, currentUser, sticky }) {
  const navigate = useNavigate();
  const openNav = () => {
    // Implement openNav logic here
  };

  const closeNav = () => {
    // Implement closeNav logic here
  };
  const classes = useStyles();

  const [open, openFunction] = useToggle(false);
  const [openRegister, openFunctionRegister] = useToggle(false);

  const goToDashboard = () => {
    navigate('/dashboard');
  };

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

              <li>
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
                <span onClick={openNav}>
                  <SegmentIcon />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#about_main">About</a>
        <a href="#">Candidates</a>
        <a href="#">NCC</a>
        <a href="#">News</a>
        <a href="#">Event</a>
        <a href="#contact_main">Contact</a>
        <a href="#" className="btn-md">
          Back To Home
        </a>
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
