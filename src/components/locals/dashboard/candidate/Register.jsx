import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import CandidateForm from './Form';
import { validationSchema } from './ValidationSchema';
import { postCandidate } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();
  const { candidate_loading } = useSelector((state) => state.candidate);

  const onSubmit = (data) => {
    dispatch(postCandidate(data, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <CandidateForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create Candidate" loading={candidate_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
