import { Box, Grid } from '@mui/material';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';

const SettingsDataForm = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useForm({});
  console.log('watch', watch());
  const members = [
    {
      label: 'Q',
      value: 'q'
    },
    { label: 'Murr', value: 'murr' },
    { label: 'Joe', value: 'joe' }
  ];
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
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

export default SettingsDataForm;
