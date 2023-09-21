import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { Roles } from 'constants/RoleConstant';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import BannerForm from './Form';
import { postBanner } from './redux/actions';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();

  const { banner_loading } = useSelector((state) => state.banner);
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    const formData = new FormData();
    let typeData;
    formData.append('title', data?.title);
    formData.append('subtitle', data?.subtitle);
    formData.append('description', data?.description);
    formData.append('link', data?.link);
    formData.append('status', 1);
    // if (user?.role_name === Roles.NCC) {
    //   formData.append('bannerable_type', 'ncc');
    //   formData.append('bannerable_id', user?.ncc?.id);
    // }

    if (user?.role_name === Roles.NCC) {
      formData.append('bannerable_type', 'ncc');
      formData.append('bannerable_id', user?.ncc?.id);
      typeData = { page: 1, bannerable_type: 'ncc', bannerable_id: user?.ncc?.id };
    }

    if (data?.image?.length > 0) {
      formData.append('image', data?.image?.[0]);
    }
    dispatch(postBanner(formData, typeData, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
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
