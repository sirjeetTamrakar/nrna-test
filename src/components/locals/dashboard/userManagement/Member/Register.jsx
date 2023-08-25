import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/actions';
import MemberForm from './Form';
import { validationSchema } from './ValidationSchema';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const defaultValues = {};
  const classes = useStyles();
  const dispatch = useDispatch();
  const { create_user_loading } = useSelector((state) => state.user);
  const onSubmit = (data) => {
    dispatch(createUser(data, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <MemberForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create Member" loading={create_user_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
