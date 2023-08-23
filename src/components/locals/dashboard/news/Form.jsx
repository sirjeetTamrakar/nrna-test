import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postNews } from './redux/actions';
import { useStyles } from './styles';

const NewsForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
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

  const submitHandler = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('title', data?.title);
    formdata.append('description', data?.description);
    formdata.append('status', data?.status);
    formdata.append('created_by', data?.created_by);
    if (data?.feature_image?.length > 0) {
      formdata.append('feature_image', data?.feature_image?.[0]);
    }
    console.log({ data });
    dispatch(postNews(formdata));
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
            <CustomInput name="created_by" label="Created By" required />
          </Grid>
          <Grid item sm={12}>
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
              name="feature_image"
              label="Select Photo"
              setValue={setValue}
              // errors={errors}
              // clearErrors={clearErrors}
              // required={true}
              imageLink={watch('feature_image') || ''}
            />
          </Grid>
          <Grid item sm={12}>
            <CustomTextArea rows={8} name="description" label="Description" />
          </Grid>
          <Grid item sm={12}>
            <Box className={classes.footerRoot}>
              <CustomButton buttonName="Submit" loading={false} />
            </Box>
          </Grid>
        </Grid>
      </CustomForm>
    </Box>
  );
};

export default NewsForm;
