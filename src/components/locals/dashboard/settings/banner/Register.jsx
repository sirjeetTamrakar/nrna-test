import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch, useSelector } from 'react-redux';
import BannerForm from './Form';
import { postBanner } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();

  const { banner_loading } = useSelector((state) => state.banner);

  const onSubmit = (data) => {
    console.log(data);
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);
    formdata.append('title', data?.title);
    formdata.append('subtitle', data?.subtitle);
    formdata.append('description', data?.description);
    formdata.append('link', data?.link);
    formdata.append('status', 'active');

    if (data?.image?.length > 0) {
      formdata.append('image', data?.image?.[0]);
    }
    dispatch(postBanner(formdata, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // sresolver={useYupValidationResolver(validationSchema)
      >
        <CustomForm onSubmit={onSubmit}>
          <BannerForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create Banner" loading={banner_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
