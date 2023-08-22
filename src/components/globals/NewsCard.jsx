import CandidateImage1 from 'assets/images/candidate1.png';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, linkUrl }) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-12">
      <Link to={linkUrl} className="news_card">
        <div className="img_wrapper">
          <img src={news?.featureImage || CandidateImage1} alt="" />
        </div>
        <div className="news_card_title">{news.title}</div>
      </Link>
    </div>
  );
};

export default NewsCard;
