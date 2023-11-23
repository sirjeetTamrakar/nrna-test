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
  const { settings, banners, ncc, home_data } = useSelector((state) => state.homepage);
  useEffect(() => {
    const single = ncc?.data?.find((list) => list?.slug == slug);
    single?.id && dispatch(getBanner({ type: 'ncc', id: single?.id }));
  }, [ncc]);

  console.log('ncc', ncc);

  // Map home_data into MissionSection and VisionSection in an alternating way
  const renderSections = () => {
    return home_data?.data?.map((item, index) => {
      if (index % 2 !== 0) {
        // Even index, render VisionSection
        return (
          <VisionSection
            key={item?.id}
            title={item?.title}
            image={item?.image}
            linkUrl={`/ncc/${slug}/${item?.slug}`}
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
            linkUrl={`/ncc/${slug}/${item?.slug}`}
            description={item?.description}
          />
        );
      }
    });
  };

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

      {renderSections()}
      {/* {settings?.mission && (
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
      )} */}
    </>
  );
};

export default NccSite;
