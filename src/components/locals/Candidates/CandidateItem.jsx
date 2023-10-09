import { Link } from 'react-router-dom';

const CandidateItem = ({ candidate }) => {
  return (
    <Link to={`/${candidate?.member?.username}`} className="political_item">
      <div className="img_container">
        <img src={candidate?.member?.profile_image} alt="" />
      </div>
      <div className="political_item_title text-center">{candidate?.member?.full_name}</div>
      <div className="political_item_subtitle text-center">{candidate?.designation}</div>
    </Link>
  );
};

export default CandidateItem;
