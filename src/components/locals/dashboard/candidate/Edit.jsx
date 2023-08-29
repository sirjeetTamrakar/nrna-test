import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import MemberForm from './Form';
import { getCandidate, updateCandidate } from './redux/actions';
import { useStyles } from './styles';

const EditForm = ({ handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const refetch = () => {
    dispatch(getCandidate());
  };

  const onSubmit = (data) => {
    console.log('data', data);
    dispatch(updateCandidate({ ...data, _method: 'PUT' }, data?.id, refetch));
    handleClose();
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <MemberForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={false} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = { ...data };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <EditForm handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
