import { Box, Grid } from '@mui/material';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';

const BannerForm = () => {
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
        <Grid item sm={12}>
          <CustomInput name="title" label="Banner Title" required />
        </Grid>
        <Grid item sm={12}>
          <CustomInput name="subtitle" label="Subtitle" required />
        </Grid>
        <Grid item sm={12}>
          <CustomInput name="link" label="Link" required />
        </Grid>
        <Grid item sm={12}>
          <FileUploader
            title="Banner Image"
            // control={control}
            name="image"
            label="Select Photo"
            setValue={setValue}
            widthFull
            // errors={errors}
            // clearErrors={clearErrors}
            // required={true}
            imageLink={watch('image') || ''}
          />
        </Grid>
        <Grid item sm={12}>
          <CustomTextArea name="description" label="Description" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerForm;
