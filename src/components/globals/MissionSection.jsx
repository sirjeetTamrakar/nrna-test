import MissionImg from 'assets/images/about.png';
import { Link } from 'react-router-dom';

const MissionSection = ({ siteSettingImages, linkUrl }) => {
  const missionImage = siteSettingImages?.mission_image?.path
    ? siteSettingImages.mission_image.path
    : MissionImg;

  const missionText =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.';
  return (
    <section className="about" id="about_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-7" id="about-section">
            <div className="about_title">Mission</div>
            <div className="about_description">
              <p>{missionText || 'Mission Data Not Added'}</p>
            </div>
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
