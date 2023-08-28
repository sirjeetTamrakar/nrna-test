import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import OurTeamForm from './Form';
import { getTeams, updateTeams } from './redux/actions';
import { useStyles } from './styles';

const EditForm = ({ id, handleClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const refetch = () => {
    dispatch(getTeams());
  };

  const onSubmit = (data) => {
    console.log('data', data);
    dispatch(updateTeams({ ...data, _method: 'PUT' }, data?.id, refetch));
    handleClose();
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <OurTeamForm />
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
        <EditForm id={data?.id} handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
