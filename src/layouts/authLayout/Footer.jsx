import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="copyright">Copyright &copy; 2021. All right Reserved. | NRNA</div>
            <div className="terms">
              <Link to="/privacy-policy" className="copyright" style={{ color: '#bffbff' }}>
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="copyright" style={{ color: '#bffbff' }}>
                Terms and Conditions
              </Link>
            </div>
          </div>
          <div className="designed_by">
            Designed By
            <a target="_blank" href="https://scodus.com" rel="noreferrer">
              {' '}
              Scodus Inovations Pvt Ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
