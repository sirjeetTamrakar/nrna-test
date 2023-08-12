import VisionImg from 'assets/images/about.png';

const VisionSection = ({ siteSettingImages }) => {
  const visionImage = siteSettingImages?.vision_image?.path
    ? siteSettingImages.vision_image.path
    : VisionImg;

  const visionText =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
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
            <div className="about_description">
              <p>{visionText || 'Vision Data Not Added'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
