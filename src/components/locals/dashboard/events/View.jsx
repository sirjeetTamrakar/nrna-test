import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Typography from '@mui/material/Typography';
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
    // <ol style={{ paddingTop: '8px', paddingBottom: '8px', listStyle: 'none' }}>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>Title:</span>
    //       <div style={{ fontSize: '16px' }}>{data?.title ? data?.title : '-'}</div>
    //     </div>
    //   </li>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>Status:</span>
    //       <div style={{ fontSize: '16px' }}>{data?.status ? data?.status : '-'}</div>
    //     </div>
    //   </li>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Event date:
    //       </span>
    //       <div style={{ fontSize: '16px' }}>{data?.event_date ? data?.event_date : '-'}</div>
    //     </div>
    //   </li>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Event time:
    //       </span>
    //       <div style={{ fontSize: '16px' }}>{data?.event_time ? data?.event_time : '-'}</div>
    //     </div>
    //   </li>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Event location:
    //       </span>
    //       <div style={{ fontSize: '16px' }}>{data?.location ? data?.location : '-'}</div>
    //     </div>
    //   </li>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Event venue:
    //       </span>
    //       <div style={{ fontSize: '16px' }}>{data?.venue ? data?.venue : '-'}</div>
    //     </div>
    //   </li>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Contact email:
    //       </span>
    //       <div style={{ fontSize: '16px' }}>{data?.contact_email ? data?.contact_email : '-'}</div>
    //     </div>
    //   </li>

    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Created by:
    //       </span>
    //       <div style={{ fontSize: '16px' }}>{data?.created_by ? data?.created_by : '-'}</div>
    //     </div>
    //   </li>
    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Created at:
    //       </span>
    //       <div style={{ fontSize: '16px' }}>{data?.created_at ? data?.created_at : '-'}</div>
    //     </div>
    //   </li>

    //   <li style={{ padding: '5px 0' }}>
    //     <div>
    //       <div style={{ display: 'flex' }}>
    //         <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //           Featue Image:
    //         </span>
    //         {data?.feature_image === '' && <div style={{ fontSize: '16px' }}>{'-'}</div>}
    //       </div>
    //       {data?.feature_image && (
    //         <div style={{ width: '100px', height: '100px' }}>
    //           <img
    //             src={data?.feature_image}
    //             alt=""
    //             style={{ height: '100%', width: '100%', objectFit: 'cover' }}
    //           />
    //         </div>
    //       )}
    //     </div>
    //   </li>

    //   <li style={{ padding: '5px 0' }}>
    //     <div style={{ display: 'flex' }}>
    //       <span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16px' }}>
    //         Description:
    //       </span>
    //       <div
    //         style={{ fontSize: '16px' }}
    //         dangerouslySetInnerHTML={{ __html: data?.description }}
    //       />
    //     </div>
    //   </li>
    // </ol>
    <div style={{ padding: '10px 20px' }}>
      <div style={{ padding: '10px 0' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#474849' }}>
          {' '}
          {data?.title}
        </Typography>
      </div>
      <div style={{ padding: '10px 0' }}>
        <div style={{ width: '100%', height: '200px' }}>
          <img
            src={data?.feature_image}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
          />
        </div>
      </div>
      <div style={{ paddingBottom: '10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ padding: '5px 0px' }}>
          <AccessTimeOutlinedIcon /> {changeDateFormat(data?.created_at, 'DD-MMM-YYYY HH:MM')}
        </span>{' '}
        <span style={{ padding: '5px 0px' }}>
          <ApartmentOutlinedIcon /> {data?.venue ? data?.venue : '-'}
        </span>{' '}
        <span style={{ padding: '5px 0px' }}>
          <EmailOutlinedIcon /> {data?.contact_email ? data?.contact_email : '-'}
        </span>{' '}
        <span style={{ padding: '5px 0px' }}>
          <LocalPhoneOutlinedIcon /> {data?.contact_phone ? data?.contact_phone : '-'}
        </span>{' '}
        <span style={{ padding: '5px 0px' }}>
          {' '}
          <LocationOnOutlinedIcon /> {data?.location ? data?.location : '-'}
        </span>
      </div>
      {/* <div style={{ padding: '10px 0' }}>
        {changeDateFormat(data?.created_at, 'DD-MMM-YYYY HH:MM')} |
        <span>
          <LocationOnOutlinedIcon />
          {data?.venue && data?.venue}, {data?.location && data?.location}
        </span>
      </div> */}

      <div style={{ padding: '10px 0' }}>
        <div style={{ fontSize: '16px' }} dangerouslySetInnerHTML={{ __html: data?.description }} />
      </div>
    </div>
  );
};

export default View;
