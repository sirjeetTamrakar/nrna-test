const View = ({ data }) => {
  return (
    <ol style={{ paddingTop: '8px', paddingBottom: '8px', listStyle: 'none' }}>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>Name:</span>
          <div style={{ fontSize: '16px' }}>{data?.member?.name ? data?.member?.name : '-'}</div>
        </div>
      </li>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
            Designation:
          </span>
          <div style={{ fontSize: '16px' }}>{data?.designation ? data?.designation : '-'}</div>
        </div>
      </li>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>Order:</span>
          <div style={{ fontSize: '16px' }}>{data?.order ? data?.order : '-'}</div>
        </div>
      </li>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>NCC id:</span>
          <div style={{ fontSize: '16px' }}>{data?.ncc_id ? data?.ncc_id : '-'}</div>
        </div>
      </li>
    </ol>
  );
};

export default View;
