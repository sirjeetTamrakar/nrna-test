import BannerImage from 'assets/images/banner.jpg';

const PageBanner = ({
  image = BannerImage,
  title = 'Welcome to NRNA Global',
  subtitle = 'Home thee Non-Resident Nepali Association (NRNA) is an organization that aims to connect and serve Nepali expatriates around the world. Established in 2003'
}) => {
  return (
    <div className="page_banner">
      <img src={image && image} alt="" />
      <div className="content_wrapper">
        <div className="container">
          <div className="title">{title && title}</div>
          <div className="subtitle">{subtitle && subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
