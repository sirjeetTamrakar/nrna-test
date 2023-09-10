import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import * as Yup from 'yup';
import { useStyles } from './styles';

const Form = () => {
  const classes = useStyles();
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().required('Please enter email'),
    subject: Yup.string().required('Please enter subject'),
    description: Yup.string().required('Please enter description')
  });
  const submitHandler = () => {
    console.log('submit');
  };
  return (
    <div>
      <p
        style={{
          fontSize: '16px',
          fontWeight: '500',
          marginBottom: '4px'
        }}>
        Contact Us
      </p>
      <CustomFormProvider resolver={useYupValidationResolver(validationSchema)}>
        <Box className={classes.contactRoot}>
          <CustomForm onSubmit={submitHandler}>
            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
              <Grid item sm={6}>
                <CustomInput name="name" label="Name" placeholder="Guy Hawkins" rows={15} />
              </Grid>
              <Grid item sm={6}>
                <CustomInput
                  name="email"
                  label="Email address"
                  type="email"
                  placeholder="guy.hawkin@gmail.com"
                  rows={15}
                />
              </Grid>
              <Grid item sm={12}>
                <CustomInput name="subject" label="Subject" placeholder="Enter Subject" rows={15} />
              </Grid>
              <Grid item sm={12}>
                <CustomTextArea
                  name="description"
                  label="Description"
                  placeholder="Say something"
                  rows={5}
                />
              </Grid>
              <Grid item sm={12}>
                <Box className={classes.footerRoot}>
                  <CustomButton buttonName="Submit Form" />
                </Box>
              </Grid>
            </Grid>
          </CustomForm>
        </Box>
      </CustomFormProvider>
    </div>
  );
};

export default Form;
