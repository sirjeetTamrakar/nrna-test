import PageBanner from 'components/globals/PageBanner';
import { useSelector } from 'react-redux';

const About = () => {
  const { nbns_settings } = useSelector((state) => state.homepage);
  return (
    <>
      <PageBanner />

      <section className="about" id="about_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-5">
              <div className="img_container text-center">
                <img src={nbns_settings?.about_image} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-xl-7" id="about-section">
              <div className="about_title">About</div>
              <div className="about_description">
                <div dangerouslySetInnerHTML={{ __html: nbns_settings?.about }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
