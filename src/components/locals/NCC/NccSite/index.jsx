import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';
import { useParams } from 'react-router-dom';

const NccSite = () => {
  const { ncc } = useParams();
  return (
    <>
      <BannerSection />
      <TaglineSection />
      <AboutSection linkUrl={`/ncc/${ncc}/about`} />
      <MissionSection linkUrl={`/ncc/${ncc}/mission`} />
      <VisionSection linkUrl={`/ncc/${ncc}/vision`} />
    </>
  );
};

export default NccSite;
