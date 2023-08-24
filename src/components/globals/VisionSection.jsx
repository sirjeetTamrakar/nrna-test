import VisionImg from 'assets/images/about.png';
import { Link } from 'react-router-dom';

const VisionSection = ({ siteSettingImages, linkUrl, vision }) => {
  const visionImage = siteSettingImages?.vision_image?.path
    ? siteSettingImages.vision_image.path
    : VisionImg;
  return (
    <section className="vision" id="vision_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-5">
            <div className="img_container text-center">
              <img src={visionImage} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-xl-7" id="vision-section">
            <div className="vision_title">Vision</div>
            <div
              className="vision_description"
              dangerouslySetInnerHTML={{ __html: vision || '' }}
            />

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
