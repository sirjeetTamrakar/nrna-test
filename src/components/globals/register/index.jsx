import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import CustomPasswordInput from 'components/common/Form/CustomPasswordInput';
import { getCountries } from 'components/locals/dashboard/ncc/redux/actions';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/actions';
import * as Yup from 'yup';

const Register = ({ loginOpen, handleClose }) => {
  const defaultValues = {};
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
  const { register_loading } = useSelector((state) => state.auth);
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().email().required('Email is required'),
    country_of_residence: Yup.string().required('Country of Residence'),
    password: Yup.string()
      .required('Please enter your password')
      .min(8, ' Your password is too short (Min 8 Character)'),
    password_confirmation: Yup.string()
      .required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')
  });

  const handleChange = (e) => {
    setAgree(e.target.checked);
  };

  const onSubmit = (data) => {
    dispatch(registerUser(data, handleClose));
  };

  const handleLoginOpen = () => {
    loginOpen();
    handleClose();
  };
  // const countries = [
  //   {
  //     label: 'Nepal',
  //     value: 'nepal'
  //   },
  //   { label: 'United Kingdom', value: 'uk' }
  // ];

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const { nccData, countries_list } = useSelector((state) => state.ncc);
  console.log({ nccData, countries_list });

  const countryList = countries_list?.map((item, index) => ({
    label: item,
    value: index
  }));
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
              options={countryList}
            />
            <CustomPasswordInput name="password" label="New Password" />
            <CustomPasswordInput name="password_confirmation" label="Confirm Password" />
          </Box>
          <Box className="agree">
            <input type="checkbox" onChange={handleChange} /> <p>I agree to terms & condition.</p>
          </Box>
          <CustomButton
            buttonName="Register"
            fullWidth
            loading={register_loading}
            disabled={!agree}
          />
          <div className="link">
            Already have an account. <span onClick={handleLoginOpen}>Login</span>
          </div>
        </div>
      </CustomForm>
    </CustomFormProvider>
  );
};

export default Register;
