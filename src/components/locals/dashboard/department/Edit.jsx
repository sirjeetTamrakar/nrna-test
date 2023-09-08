import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import OurTeamForm from './Form';
import { validationSchema } from './ValidationSchema';
import { updateDepartment } from './redux/actions';
import { useStyles } from './styles';

const EditForm = ({ id, handleClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { update_department_loading } = useSelector((state) => state.department);

  const onSubmit = (data) => {
    dispatch(updateDepartment({ ...data, _method: 'PUT' }, id, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <OurTeamForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_department_loading} />
      </Box>
    </CustomForm>
  );
};

const Edit = ({ data, handleClose }) => {
  const defaultValues = {
    title: data?.title
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <EditForm id={data?.slug} handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
