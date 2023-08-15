import AboutImg from 'assets/images/about.png';

const About = ({ siteSettingImages, title = 'About' }) => {
  const aboutImage = siteSettingImages?.about_image?.path
    ? siteSettingImages.about_image.path
    : AboutImg;

  const aboutText =
    'International Coordination Council (ICC) is the highest global representative executive body of the NRNA and provides overall guidance and directives to the executive committee. Each NCC nominates its members, in a number as prescribed by the NRNA Charter, to represent itself to the ICC. ICC also includes additional members co-opted by the ICC through its meetings. To seek advice on various issues of the NRNs, the ICC also nominates a number of recognized individuals as ICC Advisors.';
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
            <div className="about_description">
              <p>{aboutText || 'About Data Not Added'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
