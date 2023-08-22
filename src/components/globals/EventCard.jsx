import CandidateImage1 from 'assets/images/candidate1.png';
import { Link } from 'react-router-dom';

const EventCard = ({ event, linkUrl }) => {
  return (
    <div className="col-md-6">
      <div className="event_card_title">{event?.title}</div>
      <div className="event_card">
        <div className="event_card_content">
          <ul className="event_card_list">
            <li>
              <div className="title">Location :</div>
              <div className="value">Kathmandu</div>
            </li>
            <li>
              <div className="title">Venue :</div>
              <div className="value">NCC Hall</div>
            </li>
            <li>
              <div className="title">Date :</div>
              <div className="value">20-Aug-2023</div>
            </li>
            <li>
              <div className="title">Time :</div>
              <div className="value">8 AM</div>
            </li>
            <li>
              <div className="title">Contact :</div>
              <div className="value">9841587582</div>
            </li>
            <li>
              <div className="title">Email</div>
              <div className="value">info@nrnaglobal.com</div>
            </li>
          </ul>
          <Link className="btn-sm" to={linkUrl}>
            View Detail
          </Link>
        </div>
        <div className="img_wrapper">
          <img src={event?.featureImage || CandidateImage1} alt="" />
        </div>
      </div>
    </div>
  );
};
export default EventCard;
