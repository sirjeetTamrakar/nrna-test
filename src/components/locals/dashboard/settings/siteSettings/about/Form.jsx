import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postSiteSettings } from '../../redux/actions';
import { useStyles } from './styles';

const AboutForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    about: '',
    about_image: ''
  };
  const { setValue } = useFormContext({ defaultValues });

  const { site_settings, site_settings_loading } = useSelector((state) => state.settings);

  useEffect(() => {
    if (site_settings) {
      setValue('about', site_settings?.about);
    }
  }, [site_settings]);

  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append('about', data?.about);
    if (data?.about_image?.length > 0) {
      formData.append('about_image', data?.about_image?.[0]);
    }
    dispatch(postSiteSettings(formData));
  };

  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FileUploader
              title="About Image"
              imageText="Resolution: height: 525 x width: 500"
              name="about_image"
              label="Select Photo"
              image={site_settings?.about_image}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomTextArea name="about" label="About Description" required rows={15} />
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
