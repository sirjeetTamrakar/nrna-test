import { Link } from 'react-router-dom';

const BusinessItem = ({ businessItem, mainGrid }) => {
  return (
    <Link to={`/business/${businessItem.slug}`} className="political_item">
      {/* <div className="img_container"> */}
      <div className="img_container" style={mainGrid ? { height: '250px' } : { height: '145px' }}>
        <img src={businessItem?.image} alt="" />
      </div>
      <div style={{ paddingBottom: '10px' }} className="political_item_title text-center">
        {businessItem.fullname}
      </div>
    </Link>
  );
};

export default BusinessItem;
