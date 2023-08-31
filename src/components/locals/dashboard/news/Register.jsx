import Box from '@mui/material/Box';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import NewsForm from './Form';
import { validationSchema } from './ValidationSchema';
import { postNews } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();
  const { news_loading } = useSelector((state) => state.news);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('description', data?.description);
    formData.append('status', 'active');
    formData.append('created_by', data?.created_by);

    if (data?.feature_image?.length > 0) {
      formData.append('feature_image', data?.feature_image?.[0]);
    }

    dispatch(postNews(formData, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <NewsForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={news_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
