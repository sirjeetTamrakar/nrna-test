import { Link } from 'react-router-dom';

const OurTeamCard = ({ candidate }) => {
  return (
    <Link to={`/${candidate.username}`} className="political_item">
      <div className="img_container">
        <img src={candidate?.image} alt="" />
      </div>
      <div className="political_item_title text-center">{candidate.name}</div>
      <div className="political_item_subtitle text-center">Chairman</div>
    </Link>
  );
};

export default OurTeamCard;
