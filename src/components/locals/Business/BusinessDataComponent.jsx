import PageBanner from 'components/globals/PageBanner';
import TaglineSection from 'components/globals/TaglineSection';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllHomeData, getSiteSettings } from 'redux/homepage/actions';
import BusinessNav from './BusinessNav';
const BusinessDataComponent = () => {
  const dispatch = useDispatch();
  const { settings, banners, home_data } = useSelector((state) => state.homepage);
  console.log('ssssssss', { home_data });
  useEffect(() => {
    const finalData = {
      type: 'business',
      id: 1
    };
    dispatch(getAllHomeData(finalData));
    dispatch(getSiteSettings());
  }, []);

  const [selected, setSelected] = useState('home');
  console.log({ selected });

  const navigate = useNavigate();
  const handleFunction = (data) => {
    navigate(data);
  };
  console.log('bbbvbvbv', { home_data });
  const homeOptions = (home_data?.data?.slice(0, 4) || []).map((item) => ({
    title: item?.tabtitle,
    value: item?.slug,
    clickFunction: () => handleFunction(`/nrna/business/${item.slug}`)
  }));
  const options = [
    { title: 'Home', value: 'home', clickFunction: () => handleFunction('/nrna/business') }
  ];

  const allOptions = [...options, ...homeOptions];
  return (
    <>
      <BusinessNav
        category={allOptions}
        //   setSelected={setSelected}
        //   selected={selected}
        //   setSearch={setSearch}
      />
      <PageBanner
        image={settings?.about_banner}
        title={settings?.title}
        subtitle={settings?.about_subtitle}
      />
      {settings?.about_tagline && (
        <TaglineSection
          tagline={settings?.about_tagline}
          taglineAuthor={settings?.about_tagline_author}
        />
      )}

      <section className="about" id="about_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-5">
              <div className="img_container text-center">
                <img src={settings?.about_image} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-xl-7" id="about-section">
              <div className="about_title">About</div>
              <div className="about_description_single">
                <div dangerouslySetInnerHTML={{ __html: settings?.about }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessDataComponent;
