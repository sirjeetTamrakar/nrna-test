import { Link } from 'react-router-dom';

const NccItemOne = ({ settingsData, nccItem, linkUrl, gridLayout, gridOne }) => {
  return (
    <div className={''}>
      <Link to={linkUrl} className="news_card">
        <div className={'img_wrapper_grid_one'}>
          <img src={settingsData?.ncc_banner_image} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* <div className="news_card_featured_news_box_grid_one">Featured News</div> */}
          <div className="news_card_title_grid_one_business">{settingsData.ncc_banner_title}</div>
          {settingsData?.ncc_description !== '' && (
            <div
              className="news_card_text_description_business"
              dangerouslySetInnerHTML={{ __html: settingsData?.ncc_description || '' }}
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

export default NccItemOne;
