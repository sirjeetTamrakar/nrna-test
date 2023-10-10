import { Link } from 'react-router-dom';

const MissionSection = ({ image, linkUrl, title, description, viewAll }) => {
  return (
    <section className="mission" id="mission_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-7" id="mission-section">
            <div className="mission_title">{title}</div>
            <div
              className="mission_description"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />

            {!viewAll && (
              <Link to={linkUrl || `/mission`} className="view_more">
                View More
              </Link>
            )}
          </div>
          <div className="col-lg-5 col-xl-5">
            <div className="img_container text-center">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
