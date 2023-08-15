import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <TaglineSection />
      <AboutSection />
      <MissionSection />
      <VisionSection />
    </>
  );
};

export default Homepage;
