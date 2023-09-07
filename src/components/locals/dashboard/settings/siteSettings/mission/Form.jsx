import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { Roles } from 'constants/RoleConstant';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postSiteSettings } from '../../redux/actions';
import { useStyles } from './styles';

const MissionForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    mission: '',
    mission_image: ''
  };
  const { setValue } = useFormContext({ defaultValues });

  const { site_settings, site_settings_loading } = useSelector((state) => state.settings);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (site_settings) {
      setValue('mission', site_settings?.mission);
    }
  }, [site_settings]);

  const submitHandler = (data) => {
    const formData = new FormData();

    formData.append('mission', data?.mission);
    if (user?.role_name === Roles.NCC) {
      formData.append('settingable_type', user?.role_name);
      formData.append('settingable_id', user?.id);
    }
    if (data?.mission_image?.length > 0) {
      formData.append('mission_image', data?.mission_image?.[0]);
    }
    dispatch(postSiteSettings(formData));
  };

  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FileUploader
              title="Mission Image"
              imageText="Resolution: height: 525 x width: 500"
              name="mission_image"
              label="Select Photo"
              image={site_settings?.mission_image}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomTextArea name="mission" label="Mission Description" required rows={15} />
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

export default MissionForm;
