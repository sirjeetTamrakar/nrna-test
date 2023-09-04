import { useSelector } from 'react-redux';

const Mission = () => {
  const { settings } = useSelector((state) => state.homepage);
  return (
    <section className="about" id="about_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-5">
            <div className="img_container text-center">
              <img src={settings?.mission_image} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-xl-7" id="about-section">
            <div className="about_title">Mission</div>
            <div className="about_description">
              <div dangerouslySetInnerHTML={{ __html: settings?.mission }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
