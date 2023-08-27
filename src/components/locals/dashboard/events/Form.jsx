import { Box, Grid } from '@mui/material';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

const EventForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const dropData = [
  //   { value: 'active', label: 'Active' },
  //   { value: 'Inactive', label: 'Inactive' }
  // ];

  // const defaultValues = {
  //   status: dropData?.[0]?.value
  // };
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useFormContext();

  console.log('watch', watch());

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CustomInput name="title" label="Title" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput
            name="contact_email"
            type="email"
            label="Contact email"
            control={control}
            errors={errors}
          />
        </Grid>
        <Grid item sm={6}>
          <CustomInput
            name="contact_phone"
            label="Contact phone"
            control={control}
            errors={errors}
          />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="location" label="location" />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="venue" label="Venue" />
        </Grid>
        <Grid item sm={12}>
          <CustomInput name="map_url" label="Map Url" />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="event_date" label="Event date" type="date" />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="event_time" label="Event time" type="time" />
        </Grid>

        {/* <Grid item sm={12}>
          <CustomAutoComplete
            select
            placeholder="Level"
            name="status"
            label="Status"
            options={dropData ?? []}
          />
        </Grid> */}
        <Grid item sm={12}>
          <FileUploader
            title="Event Image"
            imageText="Resolution: height: 1024 x width: 768"
            // control={control}
            name="feature_image"
            label="Select Photo"
            setValue={setValue}
            widthFull
            // errors={errors}
            // clearErrors={clearErrors}
            // required={true}
            imageLink={watch('feature_image') || ''}
          />
        </Grid>
        <Grid item sm={12}>
          <CustomTextArea rows={8} name="description" label="Description" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventForm;
