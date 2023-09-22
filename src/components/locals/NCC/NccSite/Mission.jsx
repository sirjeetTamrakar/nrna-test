import PageBanner from 'components/globals/PageBanner';
import { useSelector } from 'react-redux';

const Mission = ({ siteSettingImages, title = 'Mission' }) => {
  const { settings } = useSelector((state) => state.homepage);

  return (
    <>
      <PageBanner />
      <section className="about" id="about_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-5">
              <div className="img_container text-center">
                <img src={settings?.mission_image} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-xl-7" id="about-section">
              <div className="about_title">{title}</div>
              <div className="about_description">
                <p>{settings?.mission || 'About Data Not Added'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
