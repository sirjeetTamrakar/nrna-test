import { Link } from 'react-router-dom';

const EventCard = ({ event, linkUrl }) => {
  return (
    <div className="col-md-6">
      <div className="event_card_title">{event?.title}</div>
      <div className="event_card">
        <div className="event_card_content">
          <div className="event_card_date">{event?.created_date}</div>
          <div className="event_card_description">
            {event?.excerpt}
            {event?.moreText ? '....' : ''}
          </div>
          <Link className="btn-sm" to={linkUrl}>
            Read More
          </Link>
        </div>
        <div className="img_wrapper">
          <img src={event?.featureImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default EventCard;
