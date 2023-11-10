import { Link } from 'react-router-dom';
import googlePlayImage from 'assets/images/googlePlay.png';
import appStoreImage from 'assets/images/appStore.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="copyright">
              Copyright &copy; 2021. All right Reserved. | NRNA Global
            </div>
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
          <div className="app-download">
            <a
              href="https://play.google.com/store/apps/details?id=com.scodus.nrna&hl=en&gl=US"
              target="_blank"
              rel="noreferrer">
              <img src={googlePlayImage} alt="Google Play Store" width="100" height="33" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src={appStoreImage} alt="Apple Store" width="100" height="33" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
