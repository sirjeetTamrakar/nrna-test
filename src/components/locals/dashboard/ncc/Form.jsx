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

  const { nccData, countries_list } = useSelector((state) => state.ncc);
  console.log({ nccData, countries_list });

  const countryList = countries_list?.map((item, index) => ({
    label: item,
    value: item
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
            label="Select Logo"
            setValue={setValue}
            widthFull
            // errors={errors}
            // clearErrors={clearErrors}
            // required={true}
            imageLink={watch('logo') || ''}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NCCForm;
