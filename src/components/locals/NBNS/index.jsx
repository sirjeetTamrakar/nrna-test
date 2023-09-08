import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from 'redux/homepage/actions';

const NBNS = () => {
  const { nbns_settings, banners } = useSelector((state) => state.homepage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanner({ type: 'nbns', id: 1 }));
  }, []);
  return (
    <>
      <BannerSection banners={banners} />
      <TaglineSection
        taglineAuthor={nbns_settings?.tagline_author}
        tagline={nbns_settings?.tagline_description}
      />
      <AboutSection
        image={nbns_settings?.about_image}
        about={nbns_settings?.about}
        linkUrl={`/nbns/about`}
      />
      <MissionSection
        mission={nbns_settings?.mission}
        image={nbns_settings?.mission_image}
        linkUrl={`/nbns/mission`}
      />
      <VisionSection
        vision={nbns_settings?.vision}
        image={nbns_settings?.vision_image}
        linkUrl={`/nbns/vision`}
      />
    </>
  );
};

export default NBNS;
