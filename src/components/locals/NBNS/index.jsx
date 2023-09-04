import Image from 'assets/images/banner.jpg';
import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import TaglineSection from 'components/globals/TaglineSection';

const NBNS = () => {
  const banners = [
    {
      title: 'नेपाली बंसज नागरिक संग',
      image: Image
    }
  ];
  return (
    <>
      <BannerSection banners={banners} />
      <TaglineSection />
      <AboutSection linkUrl={`/nbns/about`} />
    </>
  );
};

export default NBNS;
