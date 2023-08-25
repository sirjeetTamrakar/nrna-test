import { Box, Grid } from '@mui/material';
import CustomEditor from 'components/common/CustomEditor';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const NewsForm = () => {
  const classes = useStyles();
  const { usersData } = useSelector((state) => state.auth);
  console.log({ usersData });

  const createdByUsers = usersData?.map((item) => ({
    label: item?.name,
    value: item?.id
  }));

  const dropData = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
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

  // const { site_settings } = useSelector((state) => state.settings);

  // useEffect(() => {
  //   dispatch(getNews());
  // }, []);

  // useEffect(() => {
  //   if (site_settings) {
  //     setValue('vision_image', site_settings?.vision_image);
  //     setValue('vision', site_settings?.vision);
  //   }
  //   // setValue("phone", profileState?.userData?.image);
  // }, [site_settings]);

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CustomInput name="title" label="Title" required />
        </Grid>
        <Grid item sm={12}>
          <CustomAutoComplete
            placeholder="Level"
            name="status"
            label="status"
            options={dropData ?? []}
            required
          />
        </Grid>
        <Grid item sm={12}>
          <FileUploader
            title="Banner Image"
            imageText="Resolution: height: 564 x width: 562"
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
          {/* <CustomTextArea rows={8} name="description" label="Description" /> */}
          {/* <CustomTextArea rows={8} name="description" label="Description" /> */}
          <CustomEditor
            // watch={watch}
            setValue={setValue}
            name="description"
            // errors={errors}
            // control={control}
          />
        </Grid>
        <Grid item sm={12}>
          <CustomAutoComplete
            placeholder="Created By"
            name="created_by"
            label="Created By"
            options={createdByUsers ?? []}
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsForm;
