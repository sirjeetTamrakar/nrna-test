import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHomeData } from 'redux/homepage/actions';

const Homepage = () => {
  const dispatch = useDispatch();
  const { settings, banners, home_data } = useSelector((state) => state.homepage);
  console.log('ssssssss', { home_data });
  useEffect(() => {
    dispatch(getAllHomeData());
  }, []);

  return (
    <>
      <BannerSection banners={banners} />
      <TaglineSection
        tagline={settings?.tagline_description}
        taglineAuthor={settings?.tagline_author}
      />
      <AboutSection about={settings?.about} image={settings?.about_image} />
      {home_data?.data?.map((item) => {
        return (
          <div key={item?.id}>
            <MissionSection
              title={item?.title}
              image={item?.image}
              linkUrl={item?.slug}
              description={item?.description}
            />
          </div>
        );
      })}
      {/* <MissionSection mission={settings?.mission} image={settings?.mission_image} /> */}
      <VisionSection vision={settings?.vision} image={settings?.vision_image} />
    </>
  );
};

export default Homepage;
