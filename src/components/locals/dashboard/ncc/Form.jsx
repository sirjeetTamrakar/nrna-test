import { Box, Grid } from '@mui/material';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import FileUploader from 'components/common/Form/CustomFileUpload';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const NCCForm = () => {
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

  const { nccData } = useSelector((state) => state.ncc);
  console.log({ nccData });

  const countryList = nccData?.map((item) => ({
    label: item?.country_name,
    value: item?.id
  }));
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CustomAutoComplete
            placeholder="Country Name"
            name="country_name"
            label="Country Name"
            options={countryList ?? []}
            required
          />{' '}
        </Grid>

        <Grid item sm={12}>
          <FileUploader
            title="NCC Logo"
            // control={control}
            name="logo"
            label="Select NCC logo"
            setValue={setValue}
            widthFull
            // errors={errors}
            // clearErrors={clearErrors}
            // required={true}
            imageLink={watch('feature_image') || ''}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NCCForm;
