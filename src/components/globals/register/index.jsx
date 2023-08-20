import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import CustomPasswordInput from 'components/common/Form/CustomPasswordInput';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useState } from 'react';
import * as Yup from 'yup';
const Register = ({ loginOpen, handleClose }) => {
  const defaultValues = {};
  const [agree, setAgree] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().email().required('Email is required'),
    country_of_residence: Yup.string().required('Country of Residence'),
    new_password: Yup.string()
      .required('Please enter your password')
      .min(8, ' Your password is too short (Min 8 Character)'),
    confirm_password: Yup.string()
      .required('Please retype your password.')
      .oneOf([Yup.ref('new_password')], 'Your passwords do not match.')
  });

  const handleChange = (e) => {
    setAgree(e.target.checked);
  };

  const onSubmit = (data) => {
    console.log(data, 'formData');
  };

  const handleLoginOpen = () => {
    loginOpen();
    handleClose();
  };
  const countries = [
    {
      label: 'Nepal',
      value: 'nepal'
    },
    { label: 'United Kingdom', value: 'uk' }
  ];
  return (
    <CustomFormProvider
      defaultValues={defaultValues}
      resolver={useYupValidationResolver(validationSchema)}>
      <CustomForm onSubmit={onSubmit}>
        <div className="login_wrapper">
          <div className="title">Join Us</div>
          <div className="subtitle">Register to the website to browse more</div>
          <Box display="flex" flexDirection="column" rowGap={`12px`}>
            <CustomInput name="name" label="Name" />
            <CustomInput name="email" label="Email" type="email" />
            <CustomAutoComplete
              name="country_of_residence"
              label="Country of Residence"
              options={countries}
            />
            <CustomPasswordInput name="new_password" label="New Password" />
            <CustomPasswordInput name="confirm_password" label="Confirm Password" />
          </Box>
          <Box className="agree">
            <input type="checkbox" onChange={handleChange} /> <p>I agree to terms & condition.</p>
          </Box>
          <CustomButton buttonName="Register" fullWidth loading={false} disabled={!agree} />
          <div className="link">
            Already have an account. <span onClick={handleLoginOpen}>Login</span>
          </div>
        </div>
      </CustomForm>
    </CustomFormProvider>
  );
};

export default Register;
