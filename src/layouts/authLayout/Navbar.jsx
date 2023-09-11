import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SegmentIcon from '@mui/icons-material/Segment';
import { Box } from '@mui/material';
import Logo from 'assets/images/nrna.png';
import CustomModal from 'components/common/CustomModal/CustomModal';
import Login from 'components/globals/login';
import Register from 'components/globals/register';
import useToggle from 'hooks/useToggle';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn } from 'utils';
function Navbar({ isHomePage, currentUser, sticky }) {
  const navigate = useNavigate();
  const openNav = () => {
    // Implement openNav logic here
  };

  const closeNav = () => {
    // Implement closeNav logic here
  };

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
                <div className="main-name">
                  <h4>{currentUser ? currentUser.name : 'NRNA'}</h4>
                </div>
              </div>
            </Link>

            <ul className="nav_wrapper">
              <li className="d-none d-lg-block">
                <Link to="/">Home</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/nbns">NBNS</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/our-team">Our Team</Link>
              </li>

              <li className="d-none d-lg-block">
                <Link to="/business">Business</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/ncc">NCC</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/news">News</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/events">Event</Link>
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
