import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { Roles } from 'constants/RoleConstant';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import NewsForm from './Form';
import { validationSchema } from './ValidationSchema';
import { postNews } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const defaultValues = { created_by: user?.id };
  const classes = useStyles();
  const { news_loading } = useSelector((state) => state.news);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('description', data?.description);
    formData.append('created_by', data?.created_by);
    formData.append('news_category_id', data?.news_category_id);

    if (data?.feature_image?.length > 0) {
      formData.append('feature_image', data?.feature_image?.[0]);
    }
    let typeData;
    if (user?.role_name == Roles?.Member) {
      typeData = { type: 'member', id: user?.id, page: 1, pagination_limit: 10 };
    } else if (user?.role_name == Roles?.NCC) {
      typeData = { type: 'ncc', id: user?.id, page: 1, pagination_limit: 10 };
    }
    dispatch(postNews(formData, handleClose, typeData));
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
