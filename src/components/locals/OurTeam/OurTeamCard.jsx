import { Link } from 'react-router-dom';

const OurTeamCard = ({ candidate }) => {
  return (
    <Link to={`/our-team/${candidate?.member?.username}`} className="political_item">
      <div className="img_container">
        <img src={candidate?.member?.profile_image} alt="" />
      </div>
      <div className="political_item_title text-center">
        {candidate?.member?.full_name !== ''
          ? candidate?.member?.full_name
          : candidate?.member?.username}
      </div>
      <div className="political_item_subtitle text-center">{candidate?.designation}</div>
    </Link>
  );
};

export default OurTeamCard;
