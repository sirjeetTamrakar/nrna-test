import Box from '@mui/material/Box';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { postCategory } from '../redux/actions';
import CategoryForm from './Form';
import { validationSchema } from './ValidationSchema';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();
  const { category_loading } = useSelector((state) => state.business);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    if (data?.feature_image?.length > 0) {
      formData.append('feature_image', data?.feature_image?.[0]);
    }
    dispatch(postCategory(formData, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <CategoryForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={category_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
