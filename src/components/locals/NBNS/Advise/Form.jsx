import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import { getCountries } from 'components/locals/dashboard/ncc/redux/actions';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postAdvice } from 'redux/homepage/actions';

import * as Yup from 'yup';

const Form = () => {
  const dispatch = useDispatch();
  const { countries_list } = useSelector((state) => state.ncc);
  const { advice_loading } = useSelector((state) => state.advice);
  console.log({ countries_list });

  const countryList = countries_list?.map((item, index) => ({
    label: item,
    value: item
  }));

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const { setValue, watch } = useFormContext({});

  const refetch = () => {
    const array = ['name', 'email', 'phone', 'country_of_residence', 'advice'];
    array?.map((item) => setValue(item, ''));
    // dispatch(getAdvice());
  };

  const onSubmit = (data) => {
    dispatch(postAdvice(data, refetch));
  };
  return (
    <CustomForm onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <CustomInput name="name" label="Full Name" required />
        </Grid>
        <Grid item sm={6}>
          <CustomAutoComplete
            placeholder="Country of residence"
            name="country_of_residence"
            label="Country of residence"
            options={countryList ?? []}
            required
          />
          {/* <CustomInput name="country_of_residence" label="Country of Residence" required /> */}
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="email" label="Email" type="email" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="phone" label="Phone" required />
        </Grid>
        {/* <Grid item sm={12}>
          <FileUploader
            title="News Image"
            imageText="Resolution: height: 1024 x width: 768"
            // control={control}
            name="logo"
            label="Select Photo"
            setValue={setValue}
            widthFull
            // errors={errors}
            // clearErrors={clearErrors}
            // required={true}
            imageLink={watch('logo') || ''}
          />
        </Grid> */}
        <Grid item sm={12}>
          <CustomInput name="advice" label="Advice" required multiline rows={8} />
        </Grid>
        <Grid item sm={12}>
          <Box display="flex" justifyContent="flex-end">
            <CustomButton buttonName="Share Your Wisdom" loading={advice_loading} />
          </Box>
        </Grid>
      </Grid>
    </CustomForm>
  );
};

const AdviceForm = () => {
  const defaultValues = {};
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    // yup.array().required("Please select an hobby").min(1, "Please select an hobby")
    // country_of_resident: Yup.string().required('Please select a country'),
    email: Yup.string().email().required('Please enter email'),
    advice: Yup.string().required('Please write your advice before submitting'),
    phone: Yup.string()
      .typeError('It must be a number')
      .required('Phone number is required')
      .min(10)
      .max(10)
  });
  return (
    <CustomFormProvider
      defaultValues={defaultValues}
      resolver={useYupValidationResolver(validationSchema)}>
      <Form />
    </CustomFormProvider>
  );
};

export default AdviceForm;
