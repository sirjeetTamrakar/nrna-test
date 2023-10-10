import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { Roles } from 'constants/RoleConstant';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import MemberForm from './Form';
import { updateCandidate } from './redux/actions';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const EditForm = ({ id, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { update_candidate_loading } = useSelector((state) => state.candidate);
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    let typeData;
    if (user?.role_name == Roles?.NCC) {
      typeData = { id: user?.id, page: 1, pagination_limit: 10 };
      dispatch(
        updateCandidate({ ...data, ncc_id: user?.id, _method: 'PUT' }, id, handleClose, typeData)
      );
    } else {
      typeData = { page: 1, pagination_limit: 10 };
      dispatch(updateCandidate({ ...data, _method: 'PUT' }, id, handleClose, typeData));
    }
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <MemberForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_candidate_loading} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  console.log('llmmmmm', { data });
  const defaultValues = {
    member_id: data?.member?.id,
    designation: data?.designation,
    order: data?.order
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <EditForm id={data?.id} handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
