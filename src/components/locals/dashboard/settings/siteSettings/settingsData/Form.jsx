import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import { Roles } from 'constants/RoleConstant';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postSiteSettings } from '../../redux/actions';
import { useStyles } from './styles';

const SettingsDataForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    address: '',
    phone: '',
    email: '',
    region_logo: ''
  };
  const { setValue } = useFormContext({ defaultValues });

  const { site_settings, site_settings_loading } = useSelector((state) => state.settings);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (site_settings) {
      setValue('address', site_settings?.address);
      setValue('email', site_settings?.email);
      setValue('phone', site_settings?.phone);
    }
  }, [site_settings]);

  const submitHandler = (data) => {
    const formData = new FormData();
    let typeData;
    formData.append('address', data?.address);
    formData.append('phone', data?.phone);
    formData.append('email', data?.email);
    if (user?.role_name == Roles.NCC) {
      formData.append('settingable_type', 'ncc');
      formData.append('settingable_id', user?.ncc?.id);
      typeData = { settingable_type: 'ncc', settingable_id: user?.ncc?.id };
    }

    if (data?.region_logo?.length > 0) {
      formData.append('region_logo', data?.region_logo?.[0]);
    }

    dispatch(postSiteSettings(formData, typeData));
  };
  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FileUploader
              title="Site Logo"
              name="region_logo"
              label="Select Photo"
              image={site_settings?.region_logo}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomInput name="address" label="Address" required />
          </Grid>
          <Grid item sm={12}>
            <CustomInput name="email" label="Email" type="email" required />
          </Grid>
          <Grid item sm={12}>
            <CustomInput name="phone" label="Phone" type="number" required />
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

export default SettingsDataForm;
