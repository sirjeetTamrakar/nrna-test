import { Link } from 'react-router-dom';

const NewsCard = ({ news, linkUrl }) => {
  return (
    <div className="col-md-6">
      <div className="event_card_title">{news.title}</div>
      <div className="event_card">
        <div className="event_card_content">
          <div className="event_card_date">{news.created_date}</div>
          <div className="event_card_description">
            {news.excerpt}
            {news.moreText ? '....' : ''}
          </div>
          {/* <a
            className="btn-sm"
            href={
              news.user_id
                ? `/singleNews/${news.user.username}/${news.slug}`
                : `/singleNews/admin/${news.slug}`
            }> */}
          <Link className="btn-sm" to={linkUrl || ''}>
            Read More
          </Link>
        </div>
        <div className="img_wrapper">
          <img src={news.featureImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
