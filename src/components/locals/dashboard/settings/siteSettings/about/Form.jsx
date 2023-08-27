import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getSiteSettings, postSiteSettings } from '../../redux/actions';
import { useStyles } from './styles';

const AboutForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    about: '',
    about_image: ''
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useFormContext({ defaultValues });
  console.log('watch', watch());

  const { site_settings, site_settings_loading } = useSelector((state) => state.settings);

  console.log('site_loading', { site_settings_loading });

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  useEffect(() => {
    if (site_settings) {
      setValue('about_image', site_settings?.about_image);
      setValue('about', site_settings?.about);
    }
    // setValue("phone", profileState?.userData?.image);
  }, [site_settings]);

  const submitHandler = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('about', data?.about);
    if (data?.about_image?.length > 0) {
      formdata.append('about_image', data?.about_image?.[0]);
    }
    console.log({ data });
    dispatch(postSiteSettings(formdata));
    // dispatch(postSiteSettings(data));
  };

  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FileUploader
              title="About Image"
              // control={control}
              imageText="Resolution: height: 525 x width: 500"
              name="about_image"
              label="Select Photo"
              setValue={setValue}
              // errors={errors}
              // clearErrors={clearErrors}
              // required={true}
              imageLink={watch('about_image') || ''}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomTextArea name="about" label="About Description" required rows={6} />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.footerRoot}>
              <CustomButton loading={site_settings_loading} buttonName="Submit" />
            </Box>
          </Grid>
        </Grid>
      </CustomForm>
    </Box>
  );
};

export default AboutForm;
