import AboutSection from './components/AboutSection';
import BannerSection from './components/Banner';
import ContactSection from './components/ContactSection';
import MissionSection from './components/MissionSection';
import TaglineSection from './components/TaglineSection';
import VisionSection from './components/VisionSection';

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <TaglineSection />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <ContactSection />
    </>
  );
};

export default Homepage;
