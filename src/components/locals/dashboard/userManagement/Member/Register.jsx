import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNCC } from '../../ncc/redux/actions';
import { createUser } from '../redux/actions';
import MemberForm from './Form';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const Register = ({ handleClose }) => {
  const defaultValues = {};
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filteredNcc, setFilteredNcc] = useState();
  const { nccData, get_ncc_loading } = useSelector((state) => state.ncc);
  const { create_user_loading } = useSelector((state) => state.user);
  const { user, admin_role_details, admin_ncc_id_details } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getNCC());
  }, []);

  useEffect(() => {
    const newArray = nccData?.data?.filter((item) => item?.id === admin_ncc_id_details);
    const newObj = {};

    newArray?.forEach((item, index) => {
      newObj[`nccID${index + 1}`] = item;
    });
    setFilteredNcc(newObj);
  }, [nccData?.data, admin_ncc_id_details]);

  const onSubmit = (data) => {
    if (user?.role_name === 'superadmin' && admin_role_details === 'ncc') {
      const roleData = { country: filteredNcc };
      dispatch(createUser(data, roleData, handleClose));
    } else {
      dispatch(createUser(data, handleClose));
    }
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
