import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const { settings } = useSelector((state) => state.homepage);
  return (
    <>
      <BannerSection />
      <TaglineSection
        tagline={settings?.tagline_description}
        taglineAuthor={settings?.tagline_author}
      />
      <AboutSection about={settings?.about} image={settings?.about_image} />
      <MissionSection mission={settings?.mission} image={settings?.mission_image} />
      <VisionSection vision={settings?.vision} image={settings?.vision_image} />
    </>
  );
};

export default Homepage;
