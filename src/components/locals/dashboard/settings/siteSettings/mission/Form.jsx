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

const MissionForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    mission: '',
    mission_image: ''
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

  const { site_settings } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  useEffect(() => {
    if (site_settings) {
      setValue('mission_image', site_settings?.mission_image);
      setValue('mission', site_settings?.mission);
    }
    // setValue("phone", profileState?.userData?.image);
  }, [site_settings]);

  const submitHandler = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('mission', data?.mission);
    if (data?.mission_image?.length > 0) {
      formdata.append('mission_image', data?.mission_image?.[0]);
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
              title="Mission Image"
              // control={control}
              imageText="Resolution: height: 525 x width: 500"
              name="mission_image"
              label="Select Photo"
              setValue={setValue}
              // errors={errors}
              // clearErrors={clearErrors}
              // required={true}
              imageLink={watch('mission_image') || ''}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomTextArea name="mission" label="Mission Description" required rows={6} />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.footerRoot}>
              <CustomButton buttonName="Submit" loading={false} />
            </Box>
          </Grid>
        </Grid>
      </CustomForm>
    </Box>
  );
};

export default MissionForm;
