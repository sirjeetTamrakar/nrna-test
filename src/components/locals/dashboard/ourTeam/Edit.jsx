import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import OurTeamForm from './Form';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const EditForm = () => {
  const classes = useStyles();
  const onSubmit = (data) => {
    console.log(data);
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
const Edit = ({ data }) => {
  const defaultValues = { ...data };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <EditForm />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
