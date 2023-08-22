import { Box, Grid } from '@mui/material';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';

const EventForm = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useForm({});
  const countries = [
    {
      label: 'Nepal',
      value: 'Nepal'
    },
    { label: 'United Kingdom', value: 'uk' }
  ];
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <CustomInput name="title" label="Title" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="created_by" label="Created By" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="location" label="Location" />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="venue" label="Venue" />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="map_url" label="Map Url" />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="date" label="Dateandtime" type="datetime-local" />
        </Grid>
        <Grid item sm={12}>
          <FileUploader
            title="Banner Image"
            // control={control}
            name="image"
            label="Select Photo"
            setValue={setValue}
            // errors={errors}
            // clearErrors={clearErrors}
            // required={true}
            imageLink={watch('image') || ''}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventForm;
