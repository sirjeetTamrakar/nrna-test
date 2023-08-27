import { changeDateFormat } from 'utils/dateUtils';

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
        if (key === 'logo' || key === 'updated_at') {
          return null;
        }

        return (
          <li style={{ padding: '5px 0' }} key={index}>
            {key + ' : ' + value}
          </li>
        );
      })}
      {data?.feature_image && (
        <li style={{ padding: '5px 0' }}>
          <div>
            Ncc Logo:
            <div style={{ width: '100px', height: '100px' }}>
              <img
                src={data?.logo}
                alt=""
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </li>
      )}
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          updated_at:
          <div style={{ marginLeft: '5px' }}>{changeDateFormat(data?.updated_at)}</div>
        </div>
      </li>
    </ol>
  );
};

export default View;
