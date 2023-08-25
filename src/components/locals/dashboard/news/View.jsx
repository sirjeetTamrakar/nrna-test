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
    <ol style={{ paddingTop: '8px', paddingBottom: '8px' }}>
      {Object.entries(data).map((entry, index) => {
        const [key, value] = entry;

        // Exclude property
        if (key === 'description' || key === 'feature_image') {
          return null;
        }

        return (
          <li style={{ padding: '5px 0', textTransform: 'capitalize' }} key={index}>
            {key + ' : ' + value}
          </li>
        );
      })}
      {data?.feature_image && (
        <li style={{ padding: '5px 0', textTransform: 'capitalize' }}>
          <div>
            Featue Image:
            <div>
              <img src={data?.feature_image} alt="" />
            </div>
          </div>
        </li>
      )}
      <li style={{ padding: '5px 0', textTransform: 'capitalize' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px' }}>Description:</span>
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
      </li>
    </ol>
  );
};

export default View;
