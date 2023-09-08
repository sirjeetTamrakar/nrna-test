import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../redux/actions';
import NewsForm from './Form';
import { useStyles } from './styles';
import { editValidationSchema } from './ValidationSchema';

const EditForm = ({ detail, handleClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { update_category_loading } = useSelector((state) => state.business);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('_method', 'PUT');

    if (data?.image?.length > 0) {
      formData.append('image', data?.image?.[0]);
    }
    dispatch(updateCategory(formData, detail?.slug, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <NewsForm featureImage={detail?.image} />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_category_loading} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = {
    title: data?.title
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(editValidationSchema)}>
        <EditForm detail={data} handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
