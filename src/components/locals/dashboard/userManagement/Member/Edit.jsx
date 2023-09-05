import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import { updateUsers } from '../redux/actions';
import MemberForm from './Form';
import { useStyles } from './styles';

const EditForm = ({ handleClose, refetch }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRefetch = () => {
    refetch();
    handleClose();
  };

  const onSubmit = (data) => {
    dispatch(updateUsers({ ...data, _method: 'PUT' }, data?.username, handleRefetch));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <MemberForm disabled />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={false} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose, refetch }) => {
  const defaultValues = { ...data };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <EditForm handleClose={handleClose} refetch={refetch} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
