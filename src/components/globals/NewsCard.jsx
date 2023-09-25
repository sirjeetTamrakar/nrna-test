import { TimeAgo } from 'components/common/CustomTime/CustomTime';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, linkUrl }) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-12">
      <Link to={linkUrl} className="news_card">
        <div className="img_wrapper">
          <img src={news?.feature_image} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="news_card_title">{news.title}</div>
          {/* <div className="news_card_text_description" style={{ fontSize: '11px' }}>
            <div
              style={{ fontSize: '11px' }}
              dangerouslySetInnerHTML={{ __html: news?.description }}></div>
          </div>{' '} */}
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
