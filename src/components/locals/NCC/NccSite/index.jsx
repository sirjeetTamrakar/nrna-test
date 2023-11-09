import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBanner } from 'redux/homepage/actions';

const NccSite = () => {
  const { ncc: slug } = useParams();
  const dispatch = useDispatch();
  const pathname = window.location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { user } = useSelector((state) => state.auth);
  const { settings, banners, ncc } = useSelector((state) => state.homepage);
  useEffect(() => {
    const single = ncc?.data?.find((list) => list?.slug == slug);
    single?.id && dispatch(getBanner({ type: 'ncc', id: single?.id }));
  }, [ncc]);

  console.log('ncc', ncc);

  return (
    <>
      <BannerSection banners={banners} />
      {settings?.tagline_description && (
        <TaglineSection
          tagline={settings?.tagline_description}
          taglineAuthor={settings?.tagline_author}
        />
      )}
      {settings?.about && (
        <AboutSection
          about={settings?.about}
          image={settings?.about_image}
          linkUrl={`/ncc/${slug}/about`}
        />
      )}
      {settings?.mission && (
        <MissionSection
          mission={settings?.mission}
          image={settings?.mission_image}
          linkUrl={`/ncc/${slug}/mission`}
        />
      )}
      {settings?.vision && (
        <VisionSection
          vision={settings?.vision}
          image={settings?.vision_image}
          linkUrl={`/ncc/${slug}/vision`}
        />
      )}
    </>
  );
};

export default NccSite;
