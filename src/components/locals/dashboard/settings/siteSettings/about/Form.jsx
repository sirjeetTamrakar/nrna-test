import { Box, Grid } from '@mui/material';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';

const AboutForm = () => {
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
        <Grid item sm={12}>
          <CustomTextArea name="description" label="About Description" required rows={6} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutForm;
