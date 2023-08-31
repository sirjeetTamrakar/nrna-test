import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import OurTeamForm from './Form';
import { validationSchema } from './ValidationSchema';
import { updateTeams } from './redux/actions';
import { useStyles } from './styles';

const EditForm = ({ id, handleClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { update_teams_loading } = useSelector((state) => state.teams);

  const onSubmit = (data) => {
    dispatch(updateTeams({ ...data, _method: 'PUT' }, id, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <OurTeamForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_teams_loading} />
      </Box>
    </CustomForm>
  );
};

const Edit = ({ data, handleClose }) => {
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
