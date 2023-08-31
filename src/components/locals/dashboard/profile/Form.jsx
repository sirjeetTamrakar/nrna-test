import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomEditor from 'components/common/CustomEditor';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    address: '',
    phone: '',
    email: '',
    region_logo: ''
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useFormContext({ defaultValues });
  console.log('watchcccccc', watch());

  // useEffect(() => {
  //   if (site_settings) {
  //     setValue('address', site_settings?.address);
  //     setValue('email', site_settings?.email);
  //     setValue('phone', site_settings?.phone);
  //     // setValue('region_logo', site_settings?.region_logo);
  //   }
  //   // setValue("phone", profileState?.userData?.image);
  // }, [site_settings]);

  // console.log({watch:})

  const submitHandler = (data) => {
    // console.log('dssssssata', data);
    // const formdata = new FormData();
    // console.log('formdata', formdata);
    // formdata.append('address', data?.address);
    // formdata.append('phone', data?.phone);
    // formdata.append('email', data?.email);
    // if (watch('region_logo')) {
    //   if (data?.region_logo?.length > 0) {
    //     formdata.append('region_logo', data?.region_logo?.[0]);
    //   }
    // }
    // console.log({ data });
    // dispatch(postSiteSettings(formdata));
    // dispatch(postSiteSettings(data));
  };

  const [image, setImage] = useState();
  const imageRef = useRef();

  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Typography sx={{ fontSize: '13px', color: '#666', marginLeft: '15px' }}>
              Profile Image
            </Typography>
            <Box
              sx={{
                maxWidth: '250px',
                maxHeight: '250px',
                position: 'relative',
                marginBottom: '20px',
                marginLeft: '15px'
              }}>
              {/* <Typography>Profile picture</Typography> */}
              <Avatar
                src={image && URL.createObjectURL(image)}
                variant="square"
                style={{
                  width: '250px',
                  height: '250px',
                  marginTop: '10px'
                }}
              />
              <Box
                style={{
                  position: 'absolute',
                  // right: "-10px",
                  bottom: '-46px'
                }}>
                <Button
                  style={{
                    backgroundColor: '#2B6DF8',
                    color: '#fff',
                    width: '250px'
                  }}
                  onClick={() => imageRef.current.click()}>
                  Upload image
                </Button>
              </Box>
            </Box>
            <Box marginTop={'10px'} display={'none'}>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files && e.target.files?.[0])}
                ref={imageRef}
              />
            </Box>
          </Grid>
          <Grid item sm={8}>
            <FileUploader
              title="Profile banner image"
              // control={control}
              name="profile_image"
              label="Select Photo"
              setValue={setValue}
              widthFull
              // errors={errors}
              // clearErrors={clearErrors}
              // required={true}
              imageLink={watch('region_logo') || ''}
            />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="name" label="Fullname" required />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="email" label="Email" type="email" required />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="phone" label="Phone" required />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="address" label="Address" required />
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
            <CustomEditor setValue={setValue} name="description" />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.footerRoot}>
              <CustomButton buttonName="Submit" />
            </Box>
          </Grid>
        </Grid>
      </CustomForm>
    </Box>
  );
};

export default ProfileForm;
