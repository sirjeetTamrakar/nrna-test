import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { Roles } from 'constants/RoleConstant';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { postHomeData } from '../../redux/actions';
import HomeDataForm from './Form';
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
    formData.append('tab_title', data?.tab_title);
    formData.append('subtitle', data?.subtitle);
    formData.append('description', data?.description);
    formData.append('status', 1);

    if (user?.role_name === Roles.NCC) {
      formData.append('bannerable_type', 'ncc');
      formData.append('bannerable_id', user?.ncc?.id);
      typeData = { page: 1, bannerable_type: 'ncc', bannerable_id: user?.ncc?.id };
    }

    if (data?.image?.length > 0) {
      formData.append('image', data?.image?.[0]);
    }
    if (data?.banner_image?.length > 0) {
      formData.append('banner_image', data?.banner_image?.[0]);
    }
    dispatch(postHomeData(formData, typeData, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <HomeDataForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create Home data" loading={banner_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
