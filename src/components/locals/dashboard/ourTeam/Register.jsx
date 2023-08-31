import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import OurTeamForm from './Form';
import { validationSchema } from './ValidationSchema';
import { postTeams } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();
  const { teams_loading } = useSelector((state) => state.teams);

  const onSubmit = (data) => {
    dispatch(postTeams(data, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <OurTeamForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create Team" loading={teams_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
