import { Box, Button, Grid } from '@mui/material';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import * as Yup from 'yup';

const Form = () => {
  const onSubmit = () => {};
  return (
    <CustomForm onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <CustomInput name="name" label="Full Name" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="country_of_residence" label="Country of Residence" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="email" label="Email" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="phone" label="Phone" />
        </Grid>
        <Grid item sm={12}>
          <CustomInput name="message" label="Advice" required multiline rows={8} />
        </Grid>
        <Grid item sm={12}>
          <Box marginTop={2} display="flex" justifyContent="flex-end">
            <Button variant="contained"> Share Your Wisdom </Button>
          </Box>
        </Grid>
      </Grid>
    </CustomForm>
  );
};

const AdviceForm = () => {
  const defaultValues = {};
  const validationSchema = Yup.object({});
  return (
    <CustomFormProvider
      defaultValues={defaultValues}
      resolver={useYupValidationResolver(validationSchema)}>
      <Form />
    </CustomFormProvider>
  );
};

export default AdviceForm;
