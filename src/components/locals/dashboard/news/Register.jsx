import Box from '@mui/material/Box';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import { warningToast } from 'utils/toast';
import NewsForm from './Form';
import { getNews, postNews } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();

  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  //   setValue,
  //   watch,
  //   clearErrors
  // } = useFormContext({ defaultValues });
  // console.log('watch', watch());
  const refetch = () => {
    dispatch(getNews());
  };
  // const onSubmit = (data) => {
  //   console.log('dssssssata', data);
  //   const formdata = new FormData();
  //   console.log('formdata', formdata);

  //   formdata.append('title', data?.title);
  //   formdata.append('description', data?.description);
  //   formdata.append('status', data?.status);
  //   formdata.append('created_by', data?.created_by);
  //   if (data?.feature_image?.length > 0) {
  //     formdata.append('feature_image', data?.feature_image?.[0]);
  //   }
  //   console.log({ data });
  //   dispatch(postNews(formdata, refetch));
  //   handleClose();
  // };

  const onSubmit = (data) => {
    console.log('data', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('title', data?.title);
    formdata.append('description', data?.description);
    formdata.append('status', data?.status);
    formdata.append('created_by', data?.created_by);

    // Check if selectedFile exists (assuming you get it from data.feature_image)
    if (data?.feature_image?.length > 0) {
      const selectedFile = data.feature_image[0];

      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);
      img.onload = () => {
        const width = img.width;
        const height = img.height;

        // Define the required resolution (change these values as needed)
        const requiredWidth = 500;
        const requiredHeight = 525;

        // Check if the image meets the required resolution criteria
        if (width === requiredWidth && height === requiredHeight) {
          formdata.append('feature_image', selectedFile);
          dispatch(postNews(formdata, refetch));
          handleClose();
        } else {
          warningToast(
            'Image dimensions are not correct. Please upload an image with the required resolution.  w500 x h525'
          );
        }
      };
    }
    // else {
    //   // No image selected
    //   dispatch(postNews(formdata, refetch));
    //   handleClose();
    // }
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <CustomForm onSubmit={onSubmit}>
          <NewsForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={false} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
