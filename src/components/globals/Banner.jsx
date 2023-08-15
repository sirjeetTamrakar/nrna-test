import BannerImg from 'assets/images/banner.jpg';
const BannerSection = ({ bannerData, title }) => {
  return (
    <div className="home-slick">
      {bannerData?.length > 0 ? (
        bannerData.map((banner, index) => (
          <div key={index}>
            <section className="banner">
              <div
                className={`banner_item ${banner.title !== '' ? 'overlay' : ''}`}
                style={{
                  backgroundImage: `url('${
                    banner.banner_image ? banner.banner_image.path : BannerImg
                  }')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}>
                <div className="container">
                  <div className="banner_wrapper">
                    <div>
                      <h1>{banner.title}</h1>
                      <div className="description">{banner.subtitle}</div>
                      {banner.link && (
                        <div className="button_wrapper">
                          <a href={banner.link} target="_blank" className="btn-lg" rel="noreferrer">
                            View
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))
      ) : (
        <div>
          <section className="banner">
            <div
              className={`banner_item overlay`}
              style={{
                backgroundImage: `url(${BannerImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}>
              <div className="container">
                <div className="banner_wrapper">
                  <div>
                    <h1>{title || 'We Stand Together For Our Nation'}</h1>
                    <div className="description">
                      Forging a Resilient Nation: Embracing Unity as We Stand Together, Shoulder to
                      Shoulder, for a Future of Progress and Strength.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default BannerSection;
