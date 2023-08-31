import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import NCCForm from './Form';
import { validationSchema } from './ValidationSchema';
import { postNCC } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();
  const { ncc_loading } = useSelector((state) => state.ncc);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('country_name', data?.country_name);
    if (data?.logo?.length > 0) {
      formData.append('logo', data?.logo[0]);
    }
    dispatch(postNCC(formData, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <NCCForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create NCC" loading={ncc_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
