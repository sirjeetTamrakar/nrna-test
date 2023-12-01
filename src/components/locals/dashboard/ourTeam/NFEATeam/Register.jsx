import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartment } from '../../department/redux/actions';
import { postTeams } from '../redux/actions';
import OurTeamForm from './Form';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();
  const { teams_loading } = useSelector((state) => state.teams);
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      type: 'nfea'
    };
    const typeData = { page: 1, pagination_limit: 10, type: 'nfea' };
    dispatch(postTeams(finalData, handleClose, typeData));
  };

  useEffect(() => {
    if (user) {
      const typeData = { page: 1, pagination_limit: 20 };
      dispatch(getDepartment(typeData));
    }
  }, [user]);

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
