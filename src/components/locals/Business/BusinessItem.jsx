import { Link } from 'react-router-dom';

const BusinessItem = ({ businessItem }) => {
  return (
    <Link to={`/business/${businessItem.slug}`} className="political_item">
      <div className="img_container">
        <img src={businessItem?.image} alt="" />
      </div>
      <div style={{ paddingBottom: '10px' }} className="political_item_title text-center">
        {businessItem.fullname}
      </div>
    </Link>
  );
};

export default BusinessItem;
