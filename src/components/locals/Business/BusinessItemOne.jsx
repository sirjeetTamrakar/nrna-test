import { TimeAgo } from 'components/common/CustomTime/CustomTime';
import { Link } from 'react-router-dom';

const BusinessItemOne = ({ news, linkUrl, gridLayout, gridOne }) => {
  return (
    <div className={gridLayout ? '' : 'col-md-4 col-lg-3 col-sm-6 col-12'}>
      <Link to={linkUrl} className="news_card">
        <div className={'img_wrapper_grid_one'}>
          <img src={news?.feature_image} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="news_card_featured_news_box_grid_one">Featured News</div>
          <div className="news_card_title_grid_one">{news.title}</div>
          {news?.excerpt !== '' && (
            <div className="news_card_text_desc_grid_one">{news?.excerpt}</div>
          )}
          {/* {news?.description !== '' && (
            <div className="news_card_text_description">{news?.description}</div>
          )} */}
          <div className="news_card_text_date_grid_one">
            <TimeAgo time={news?.created_at} /> |&nbsp;
            {news?.created_by?.full_name
              ? news?.created_by?.full_name
              : news?.created_by?.username}{' '}
          </div>{' '}
        </div>
      </Link>
    </div>
  );
};

export default BusinessItemOne;
