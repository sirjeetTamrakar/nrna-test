import About from 'assets/images/about.png';
import { Link } from 'react-router-dom';

const AboutSection = ({ siteSettingImages, linkUrl, title = 'About', about }) => {
  const aboutImage = siteSettingImages?.about_image?.path
    ? siteSettingImages.about_image.path
    : About;

  return (
    <section className="about" id="about_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-5">
            <div className="img_container text-center">
              <img src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-xl-7" id="about-section">
            <div className="about_title">{title}</div>
            <div className="about_description" dangerouslySetInnerHTML={{ __html: about || '' }} />

            <Link to={linkUrl || `/about`} className="view_more">
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
