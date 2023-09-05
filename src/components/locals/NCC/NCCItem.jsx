import { Link } from 'react-router-dom';

const NCCItem = ({ nccItem }) => {
  return (
    <Link to={`/ncc/${nccItem.slug}`} className="ncc_item">
      <div className="img_container">
        <img src={nccItem?.logo} alt="" />
      </div>
      <div className="ncc_item_title text-center">{nccItem.country_name}</div>
    </Link>
  );
};

export default NCCItem;
