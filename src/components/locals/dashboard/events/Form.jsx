import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postEvents } from './redux/actions';
import { useStyles } from './styles';

const EventForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const dropData = [
    { value: 'active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
  ];

  const defaultValues = {
    status: dropData?.[0]?.value
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

  const submitHandler = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('title', data?.title);
    formdata.append('description', data?.description);
    formdata.append('status', data?.status);
    formdata.append('location', data?.location);
    formdata.append('venue', data?.venue);
    formdata.append('event_date', data?.event_date);
    formdata.append('event_time', data?.event_time);
    formdata.append('contact_email', data?.contact_email);
    formdata.append('contact_phone', data?.contact_phone);
    formdata.append('map_url', data?.map_url);
    if (data?.feature_image?.length > 0) {
      formdata.append('feature_image', data?.feature_image?.[0]);
    }
    console.log({ data });
    dispatch(postEvents(formdata));
    // alert('dsads');
    // dispatch(postSiteSettings(data));
  };
  return (
    <Box className={classes.root}>
      <CustomForm onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <CustomInput name="title" label="Title" required />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="location" label="location" required />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="venue" label="Venue" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="contact_email" label="Contact email" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="contact_phone" label="Contact phone" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="map_url" label="Map Url" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput name="event_date" label="Dateandtime" type="datetime-local" />
          </Grid>
          <Grid item sm={6}>
            <CustomInput
              select
              placeholder="Level"
              name="status"
              label="status"
              data={dropData ?? []}
            />
          </Grid>
          <Grid item sm={12}>
            <FileUploader
              title="Banner Image"
              // control={control}
              name="feature"
              label="Select Photo"
              setValue={setValue}
              // errors={errors}
              // clearErrors={clearErrors}
              // required={true}
              imageLink={watch('image') || ''}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomTextArea rows={8} name="description" label="Description" />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.footerRoot}>
              <CustomButton buttonName="Create Event" loading={false} />
            </Box>
          </Grid>
        </Grid>
      </CustomForm>
    </Box>
  );
};

export default EventForm;
