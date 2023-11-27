import { Box, CircularProgress } from '@mui/material';
import CustomMasonry from 'components/globals/customMasonry';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from 'redux/homepage/actions';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  // const { settings } = useSelector((state) => state.homepage);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const { gallery, gallery_loading } = useSelector((state) => state.homepage);
  console.log({ gallery });
  useEffect(() => {
    dispatch(getGallery());
  }, []);

  return (
    <>
      <div className="main_content">
        <section className="all_events">
          <div className="container">
            <div className="about_title" style={{ fontSize: '20px' }}>
              Image Gallery
            </div>
            {gallery_loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
            ) : gallery?.data?.length !== 0 ? (
              <div className="" style={{ marginTop: '50px' }}>
                <div className="">
                  <div>
                    <CustomMasonry>
                      {gallery?.data?.map((item, index) => {
                        return (
                          <div style={{ width: '100%', marginBottom: '2rem' }} key={index}>
                            <ImageCard data={item} images={gallery?.data} index={index} />
                          </div>
                        );
                      })}
                    </CustomMasonry>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No resources available</h3>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

const ImageCard = ({ data, images, index }) => {
  console.log('sdddssss', { data });

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log({ isModalOpen });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div onClick={openModal} style={{ cursor: 'pointer' }}>
        <img
          src={data?.gallery_image}
          alt=""
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </div>

      <Lightbox
        open={isModalOpen}
        close={() => closeModal()}
        slides={images?.map((item) => {
          return { src: item?.gallery_image };
        })}
        index={index}
        plugins={[Counter]}
      />
    </>
  );
};

export default Gallery;
