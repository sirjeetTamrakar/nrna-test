import { Box, Grid } from '@mui/material';
import CustomEditor from 'components/common/CustomEditor';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import { useStyles } from './styles';

const ProfileForm = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <FileUploader
            title="Profile banner image"
            name="profile_image"
            label="Select Photo"
            widthFull
            image=""
          />
        </Grid>
        <Grid item sm={8}>
          <FileUploader
            title="Profile banner image"
            name="banner_image"
            label="Select Photo"
            widthFull
            image=""
          />
        </Grid>
        <Grid item sm={4}>
          <CustomInput name="name" label="Fullname" required />
        </Grid>
        <Grid item sm={4}>
          <CustomInput name="email" label="Email" type="email" required />
        </Grid>
        <Grid item sm={4}>
          <CustomInput name="phone" label="Phone" required />
        </Grid>
        <Grid item sm={4}>
          <CustomInput name="address" label="Address" required />
        </Grid>
        <Grid item sm={8}>
          <CustomInput name="map_link" label="Google Map Link" required />
        </Grid>
        <Grid item sm={4}>
          <CustomInput name="fb_link" label="Facebook url" required />
        </Grid>
        <Grid item sm={4}>
          <CustomInput name="insta_link" label="Instagram url" required />
        </Grid>
        <Grid item sm={4}>
          <CustomInput name="twitter_link" label="Twitter url" required />
        </Grid>
        <Grid item sm={12}>
          <CustomEditor name="description" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileForm;
