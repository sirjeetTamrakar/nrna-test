import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHomeData, getBanner } from 'redux/homepage/actions';

const NBNS = () => {
  const { nbns_settings, banners, home_data } = useSelector((state) => state.homepage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanner({ type: 'nbns', id: 1 }));
    dispatch(getAllHomeData({ type: 'nbns', id: 1 }));
  }, []);

  const filterHomeData = (home_data?.data?.slice(0, 4) || [])?.filter(
    (item) => item?.slug !== 'advice' && item?.slug !== 'support'
  );

  const renderSections = () => {
    return filterHomeData?.map((item, index) => {
      if (index % 2 !== 0) {
        // Even index, render VisionSection
        return (
          <VisionSection
            key={item?.id}
            title={item?.title}
            image={item?.image}
            linkUrl={item?.slug}
            description={item?.description}
          />
        );
      } else {
        // Odd index, render MissionSection
        return (
          <MissionSection
            key={item?.id}
            title={item?.title}
            image={item?.image}
            linkUrl={item?.slug}
            description={item?.description}
          />
        );
      }
    });
  };

  return (
    <>
      <BannerSection banners={banners} />
      {nbns_settings?.tagline_author && (
        <TaglineSection
          taglineAuthor={nbns_settings?.tagline_author}
          tagline={nbns_settings?.tagline_description}
        />
      )}

      <AboutSection
        image={nbns_settings?.about_image}
        about={nbns_settings?.about}
        linkUrl={`/nbns/about`}
      />
      {renderSections()}
      {/* <MissionSection
        mission={nbns_settings?.mission}
        image={nbns_settings?.mission_image}
        linkUrl={`/nbns/mission`}
      />
      <VisionSection
        vision={nbns_settings?.vision}
        image={nbns_settings?.vision_image}
        linkUrl={`/nbns/vision`}
      /> */}
    </>
  );
};

export default NBNS;
