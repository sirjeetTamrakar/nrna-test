import { Link } from 'react-router-dom';

const NCCItem = ({ nccItem }) => {
  return (
    <Link to={`/ncc/${nccItem.username}`} className="political_item">
      <div className="img_container">
        <img src={nccItem?.image} alt="" />
      </div>
      <div className="political_item_title text-center">{nccItem.name}</div>
    </Link>
  );
};

export default NCCItem;
