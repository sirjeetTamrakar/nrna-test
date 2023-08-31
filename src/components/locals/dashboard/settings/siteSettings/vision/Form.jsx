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

const VisionForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    vision: '',
    vision_image: ''
  };
  const { setValue } = useFormContext({ defaultValues });

  const { site_settings, site_settings_loading } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  useEffect(() => {
    if (site_settings) {
      setValue('vision', site_settings?.vision);
    }
  }, [site_settings]);

  const submitHandler = (data) => {
    const formData = new FormData();
    formData.append('vision', data?.vision);
    if (data?.vision_image?.length > 0) {
      formData.append('vision_image', data?.vision_image?.[0]);
    }
    dispatch(postSiteSettings(formData));
  };

  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FileUploader
              title="Vision Image"
              imageText="Resolution: height: 525 x width: 500"
              name="vision_image"
              label="Select Photo"
              image={site_settings?.vision_image}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomTextArea name="vision" label="Vision Description" required rows={15} />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.footerRoot}>
              <CustomButton buttonName="Submit" loading={site_settings_loading} />
            </Box>
          </Grid>
        </Grid>
      </CustomForm>
    </Box>
  );
};

export default VisionForm;
