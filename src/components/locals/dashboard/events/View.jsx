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
          <AccessTimeOutlinedIcon /> {changeDateFormat(data?.event_date)} {data?.event_time}
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
