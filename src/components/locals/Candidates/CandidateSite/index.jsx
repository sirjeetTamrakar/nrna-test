import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import TaglineSection from 'components/globals/TaglineSection';
import { useParams } from 'react-router-dom';

const CandidateSite = () => {
  const { candidate } = useParams();
  return (
    <>
      <BannerSection />
      <TaglineSection />
      <AboutSection linkUrl={`/${candidate}/about`} />
    </>
  );
};

export default CandidateSite;
