import { Link } from 'react-router-dom';

const BusinessItemOne = ({ settingsData, businessItem, linkUrl, gridLayout, gridOne }) => {
  return (
    <div className={''}>
      <Link to={linkUrl} className="news_card">
        <div className={'img_wrapper_grid_one'}>
          <img src={settingsData?.business_banner_image} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* <div className="news_card_featured_news_box_grid_one">Featured News</div> */}
          <div className="news_card_title_grid_one_business">
            {settingsData.business_banner_title}
          </div>
          {settingsData?.business_description !== '' && (
            <div
              className="news_card_text_description_business"
              dangerouslySetInnerHTML={{ __html: settingsData?.business_description || '' }}
            />
          )}
          {/* {news?.description !== '' && (
            <div className="news_card_text_description">{news?.description}</div>
          )} */}
          {/* <div className="news_card_text_date_grid_one">
            <TimeAgo time={news?.created_at} /> |&nbsp;
            {news?.created_by?.full_name
              ? news?.created_by?.full_name
              : news?.created_by?.username}{' '}
          </div>{' '} */}
        </div>
      </Link>
    </div>
  );
};

export default BusinessItemOne;
