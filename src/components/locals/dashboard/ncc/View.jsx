const View = ({ data }) => {
  console.log('xcxxcxxcc', { data });

  // if (selectedFile) {
  //   const img = new Image();
  //   img.src = URL.createObjectURL(selectedFile);
  //   img.onload = () => {
  //     const width = img.width;
  //     const height = img.height;
  //     setResolution(`${width} x ${height}`);
  //   };

  return (
    <ol style={{ paddingTop: '8px', paddingBottom: '8px', listStyle: 'none' }}>
      {/* {Object.entries(data).map((entry, index) => {
        const [key, value] = entry;

        // Exclude property
        if (key === 'description' || key === 'feature_image') {
          return null;
        }

        return (
          <li style={{ padding: '5px 0' }} key={index}>
            {key + ' : ' + value}
          </li>
        );
      })} */}
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
            Cuntry of residence:
          </span>
          <div style={{ fontSize: '16px' }}>{data?.country_name ? data?.country_name : '-'}</div>
        </div>
      </li>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
            Created at:
          </span>
          <div style={{ fontSize: '16px' }}>{data?.created_at ? data?.created_at : '-'}</div>
        </div>
      </li>
    </ol>
  );
};

export default View;
