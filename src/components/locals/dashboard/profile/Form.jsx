import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomEditor from 'components/common/CustomEditor';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../userManagement/redux/actions';
import { useStyles } from './styles';

const ProfileForm = () => {
  const { user } = useSelector((state) => state.auth);
  const { profile_update_loading } = useSelector((state) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { setValue } = useFormContext();

  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append('name', data?.name);
    formData.append('address', data?.address);
    formData.append('phone', data?.phone);
    formData.append('facebook_url', data?.facebook_url);
    formData.append('youtube_url', data?.youtube_url);
    formData.append('instagram_url', data?.instagram_url);
    formData.append('twitter_url', data?.twitter_url);
    formData.append('description', data?.description);

    if (data?.profile_image?.length > 0) {
      formData.append('profile_image', data?.profile_image?.[0]);
    }
    if (data?.banner_image?.length > 0) {
      formData.append(`banner_image`, data?.banner_image?.[0]);
    }
    dispatch(updateProfile(user?.username, formData));
  };

  useEffect(() => {
    if (user) {
      setValue('name', user?.name);
      setValue('address', user?.address);
      setValue('phone', user?.phone);
      setValue('facebook_url', user?.facebook_url);
      setValue('instagram_url', user?.instagram_url);
      setValue('youtube_url', user?.facebook_url);
      setValue('twitter_url', user?.twitter_url);
      setValue('description', user?.description ?? '');
    }
  }, [user]);

  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <FileUploader
              title="Profile Image"
              name="profile_image"
              label="Select Photo"
              widthFull
              image={user?.profile_image}
            />
          </Grid>
          <Grid item sm={8}>
            <FileUploader
              title="Banner image"
              name="banner_image"
              label="Select Photo"
              image={user?.banner_image}
              widthFull
            />
          </Grid>
          <Grid item sm={4}>
            <CustomInput name="name" label="Name" required />
          </Grid>
          <Grid item sm={4}>
            <CustomInput name="phone" label="Phone" />
          </Grid>
          <Grid item sm={4}>
            <CustomInput name="address" label="Address" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="facebook_url" label="Facebook url" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="instagram_url" label="Instagram url" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="twitter_url" label="Twitter url" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="youtube_url" label="Twitter url" />
          </Grid>
          <Grid item sm={12}>
            <CustomEditor name="description" />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.footerRoot}>
              <CustomButton buttonName="Submit" loading={profile_update_loading} />
            </Box>
          </Grid>
        </Grid>
      </CustomForm>
    </Box>
  );
};

export default ProfileForm;
