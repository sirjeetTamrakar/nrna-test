import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getSiteSettings, postSiteSettings } from '../../redux/actions';
import { useStyles } from './styles';

const TaglineForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const defaultValues = {
    tagline_author: '',
    tagline_description: ''
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

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  const submitHandler = (data) => {
    // alert('asdas');
    console.log({ data });
    dispatch(postSiteSettings(data));
  };

  useEffect(() => {
    if (site_settings) {
      setValue('tagline_author', site_settings?.tagline_author);
      setValue('tagline_description', site_settings?.tagline_description);
    }
    // setValue("phone", profileState?.userData?.image);
  }, [site_settings]);

  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <CustomInput name="tagline_author" label="Tagline Author" required />
          </Grid>

          <Grid item sm={12}>
            <CustomTextArea
              name="tagline_description"
              label="Tagline Description"
              required
              rows={6}
            />
          </Grid>
          {/* <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={false} />
          </Box> */}
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

export default TaglineForm;
