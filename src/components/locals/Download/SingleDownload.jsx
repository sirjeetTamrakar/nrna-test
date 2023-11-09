import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { changeDateFormat } from 'utils/dateUtils';

const SingleDownload = () => {
  const { state } = useLocation();
  console.log('state', state);

  return (
    <>
      <div className="main_content">
        <section className="all_events">
          <div className="container">
            <div className="about_title">{state?.title}</div>
            <p>
              {/* Posted On: <span>November 9, 2023</span> */}
              Posted On: <span>{changeDateFormat(state?.updatedDate, 'LL')}</span>
            </p>
            <iframe src={state?.file_src} width={'100%'} height={'900'} frameBorder="0"></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleDownload;
