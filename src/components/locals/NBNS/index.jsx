import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import TaglineSection from 'components/globals/TaglineSection';

const NBNS = () => {
  return (
    <>
      <BannerSection title="नेपाली बंसज नागरिक संग" />
      <TaglineSection />
      <AboutSection linkUrl={`/nbns/about`} />
    </>
  );
};

export default NBNS;
