import { Link } from 'react-router-dom';

const NCCItem = ({ nccItem }) => {
  const fullname = nccItem?.members?.[0]?.first_name + ' ' + nccItem?.members?.[0]?.last_name;
  return (
    <Link to={`/ncc/${nccItem.slug}`} className="ncc_item">
      <div className="img_container">
        <img src={nccItem?.logo} alt="" />
      </div>
      <div className="ncc_item_title " style={{ fontSize: '14px' }}>
        {nccItem.country_name}
      </div>
      <div
        className="ncc_item_title "
        style={{ fontSize: '11px', color: '#6b6b6b', marginTop: '-5px' }}>
        {nccItem.subtitle ?? ''}
      </div>
      <div
        className="ncc_item_title "
        style={{ fontSize: '12px', color: '#2e2e2e', marginTop: '-5px' }}>
        {nccItem.members?.[0] ? fullname : '-'}
      </div>
    </Link>
  );
};

export default NCCItem;
