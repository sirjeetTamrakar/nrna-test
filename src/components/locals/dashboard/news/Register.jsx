import Box from '@mui/material/Box';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import NewsForm from './Form';
import { getNews, postNews } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();

  const refetch = () => {
    dispatch(getNews());
  };

  const onSubmit = (data) => {
    console.log('dataiiii', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('title', data?.title);
    formdata.append('description', data?.description);
    formdata.append('status', 'active');
    formdata.append('created_by', data?.created_by);

    if (data?.feature_image?.length > 0) {
      formdata.append('feature_image', data?.feature_image?.[0]);
    }

    dispatch(postNews(formdata, refetch));
    handleClose();
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
