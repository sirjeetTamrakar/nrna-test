import MissionImg from 'assets/images/about.png';
import { Link } from 'react-router-dom';

const MissionSection = ({ siteSettingImages, linkUrl, mission }) => {
  const missionImage = siteSettingImages?.mission_image?.path
    ? siteSettingImages.mission_image.path
    : MissionImg;

  return (
    <section className="mission" id="mission_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-7" id="mission-section">
            <div className="mission_title">Mission</div>
            <div
              className="mission_description"
              dangerouslySetInnerHTML={{ __html: mission || '' }}
            />

            <Link to={linkUrl || `/mission`} className="view_more">
              View More
            </Link>
          </div>
          <div className="col-lg-5 col-xl-5">
            <div className="img_container text-center">
              <img src={missionImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
