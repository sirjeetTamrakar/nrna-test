import { TimeAgo } from 'components/common/CustomTime/CustomTime';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, linkUrl, gridLayout, gridOne }) => {
  return (
    <div className={gridLayout ? '' : 'col-md-4 col-lg-3 col-sm-6 col-12'}>
      <Link to={linkUrl} className="news_card">
        <div className={gridOne ? 'img_wrapper_grid_one' : 'img_wrapper'}>
          <img src={news?.feature_image} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="news_card_title">{news.title}</div>
          {news?.excerpt !== '' && <div className="news_card_text_desc">{news?.excerpt}</div>}
          <div className="news_card_text_date">
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

export default NewsCard;
