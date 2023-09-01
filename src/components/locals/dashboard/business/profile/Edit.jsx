import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { updateBusiness } from '../redux/actions';
import BusinessForm from './Form';
import { editValidationSchema } from './ValidationSchema';
import { useStyles } from './styles';

const EditForm = ({ detail, handleClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { update_business_loading } = useSelector((state) => state.business);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('description', data?.description);
    formData.append('status', data?.status);
    formData.append('created_by', data?.created_by);
    formData.append('status', 'active');
    formData.append('_method', 'PUT');
    if (data?.feature_image?.length > 0) {
      formData.append('feature_image', data?.feature_image?.[0]);
    }
    dispatch(updateBusiness(formData, detail?.slug, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <BusinessForm featureImage={detail?.feature_image} />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_business_loading} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = {
    title: data?.title,
    created_by: data?.created_by?.id,
    description: data?.description
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
