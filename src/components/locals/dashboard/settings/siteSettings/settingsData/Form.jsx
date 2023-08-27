import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getSiteSettings, postSiteSettings } from '../../redux/actions';
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
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useFormContext({ defaultValues });
  console.log('watchcccccc', watch());
  const { site_settings, site_settings_loading } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  useEffect(() => {
    if (site_settings) {
      setValue('address', site_settings?.address);
      setValue('email', site_settings?.email);
      setValue('phone', site_settings?.phone);
      setValue('region_logo', site_settings?.region_logo);
    }
    // setValue("phone", profileState?.userData?.image);
  }, [site_settings]);

  const submitHandler = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('address', data?.address);
    formdata.append('phone', data?.phone);
    formdata.append('email', data?.email);
    if (data?.region_logo?.length > 0) {
      formdata.append('region_logo', data?.region_logo?.[0]);
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
              title="Site Logo"
              // control={control}
              name="region_logo"
              label="Select Photo"
              setValue={setValue}
              // errors={errors}
              // clearErrors={clearErrors}
              // required={true}
              imageLink={watch('region_logo') || ''}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomInput name="address" label="Address" required />
          </Grid>
          <Grid item sm={12}>
            <CustomInput name="email" label="Email" type="email" required />
          </Grid>
          <Grid item sm={12}>
            <CustomInput name="phone" label="Phone" required />
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
