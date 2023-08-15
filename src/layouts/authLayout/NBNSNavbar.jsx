import HomeIcon from '@mui/icons-material/Home';
import Logo from 'assets/images/nrna.png';
import { Link } from 'react-router-dom';

function NBNSNavbar({ isHomePage, currentUser, sticky }) {
  const openNav = () => {
    // Implement openNav logic here
  };

  const closeNav = () => {
    // Implement closeNav logic here
  };

  return (
    <>
      <div className={`Navbar ${sticky ? 'navbar_sticky' : ''}`} id="nav">
        <div className="container">
          <div className="Navbar_wrapper">
            <Link to="/nbns" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="d-flex align-items-center" style={{ gridColumnGap: '1rem' }}>
                <div className="logo_wrapper">
                  <img style={{ height: '45px', width: 'auto' }} src={Logo} alt="Logo" />
                </div>
                <div className="main-name">
                  <h4 style={{ mixBlendMode: 'difference' }}>NBNS</h4>
                </div>
              </div>
            </Link>

            <ul className="nav_wrapper">
              <li className="d-none d-lg-block">
                <Link to="/nbns">Home</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/nbns/survey">Survey</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/nbns/advise">Advise</Link>
              </li>
              <li className="d-none d-lg-block">
                <Link to="/nbns/support">Support Us</Link>
              </li>

              <li className="d-none d-lg-block">
                <Link to="/nbns/contact">Contact</Link>
              </li>
              <li>
                <a href="#" className="btn-md">
                  Sign In
                </a>
              </li>
              <li>
                <Link to="/" className="btn-md d-none d-lg-block">
                  <HomeIcon />
                </Link>
              </li>
              <li className="d-block d-lg-none">
                <span onClick={openNav}>
                  <i className="fas fa-bars fa-bars-color"></i>
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
    </>
  );
}

export default NBNSNavbar;
