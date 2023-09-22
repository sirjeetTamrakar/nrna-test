import AboutSection from 'components/globals/AboutSection';
import BannerSection from 'components/globals/Banner';
import MissionSection from 'components/globals/MissionSection';
import TaglineSection from 'components/globals/TaglineSection';
import VisionSection from 'components/globals/VisionSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from 'redux/homepage/actions';

const Homepage = () => {
  const dispatch = useDispatch();
  const { settings, banners } = useSelector((state) => state.homepage);
  // const [filteredHomeBanner, setFilteredHomeNews] = useState();
  // useEffect(() => {
  //   if (banners) {
  //     const homeBanner = banners?.data?.filter(
  //       (item) =>
  //         item?.newsable_type !== 'ncc' &&
  //         item?.newsable_type !== 'member' &&
  //         item?.newsable_type !== 'nbns'
  //     );
  //     setFilteredHomeBanner(homeBanner);
  //   }
  // }, [banners]);
  useEffect(() => {
    dispatch(getBanner());
  }, []);

  return (
    <>
      <BannerSection banners={banners} />
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
