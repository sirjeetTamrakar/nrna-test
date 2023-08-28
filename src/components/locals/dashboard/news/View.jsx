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
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>Title:</span>
          <div style={{ fontSize: '16px' }}>{data?.title ? data?.title : '-'}</div>
        </div>
      </li>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>Status:</span>
          <div style={{ fontSize: '16px' }}>{data?.status ? data?.status : '-'}</div>
        </div>
      </li>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
            Created by:
          </span>
          <div style={{ fontSize: '16px' }}>{data?.created_by ? data?.created_by : '-'}</div>
        </div>
      </li>
      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
            Created at:
          </span>
          <div style={{ fontSize: '16px' }}>
            {data?.created_at ? changeDateFormat(data?.created_at) : '-'}
          </div>
        </div>
      </li>

      <li style={{ padding: '5px 0' }}>
        <div>
          <div style={{ display: 'flex' }}>
            <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
              Featue Image:
            </span>
            {data?.feature_image === '' && <div style={{ fontSize: '16px' }}>{'-'}</div>}
          </div>
          {data?.feature_image && (
            <div style={{ width: '100px', height: '100px' }}>
              <img
                src={data?.feature_image}
                alt=""
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      </li>

      <li style={{ padding: '5px 0' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
            Description:
          </span>
          <div
            style={{ fontSize: '16px' }}
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>
      </li>
    </ol>
  );
};

export default View;
