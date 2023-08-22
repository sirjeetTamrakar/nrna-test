import VisionImg from 'assets/images/about.png';
import { Link } from 'react-router-dom';

const VisionSection = ({ siteSettingImages, linkUrl, vision }) => {
  const visionImage = siteSettingImages?.vision_image?.path
    ? siteSettingImages.vision_image.path
    : VisionImg;
  return (
    <section className="about" id="about_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-5">
            <div className="img_container text-center">
              <img src={visionImage} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-xl-7" id="about-section">
            <div className="about_title">Vision</div>
            <div className="about_description" dangerouslySetInnerHTML={{ __html: vision || '' }} />

            <Link to={linkUrl || `/vision`} className="view_more">
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
