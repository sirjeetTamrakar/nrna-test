// import { Box } from '@mui/material';
// import {
//   getPublicDownload,
//   getPublicSingleDownload
// } from 'components/locals/dashboard/downloads/redux/actions';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { changeDateFormat } from 'utils/dateUtils';

const SingleDownload = () => {
  const { state } = useLocation();

  // const { slug } = useParams();
  // const dispatch = useDispatch();
  // const { singleDownloadData, single_download_loading, downloadData } = useSelector(
  //   (state) => state.download
  // );
  // console.log('downloadData', downloadData);
  // console.log('singleDownloadData', singleDownloadData);
  // console.log('slug', slug);

  // useEffect(() => {
  //   if (slug) {
  //     dispatch(getPublicSingleDownload(slug));
  //   }
  // }, [slug]);

  return (
    <>
      <div className="main_content">
        <section className="all_events">
          <div className="container">
            <div className="about_title">{state?.title}</div>
            <div dangerouslySetInnerHTML={{ __html: state?.description }} />
            <p>
              Posted On: <span>{changeDateFormat(state?.updatedDate, 'LL')}</span>
            </p>
            <iframe src={state?.file} width={'100%'} height={'900'} frameBorder="0"></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleDownload;
