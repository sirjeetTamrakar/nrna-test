import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import CandidateForm from './Form';
import { getCandidate, postCandidate } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();

  const refetch = () => {
    dispatch(getCandidate());
  };

  const onSubmit = (data) => {
    console.log('data', data);
    dispatch(postCandidate(data, refetch));
    handleClose();
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <CustomForm onSubmit={onSubmit}>
          <CandidateForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create Candidate" loading={false} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
