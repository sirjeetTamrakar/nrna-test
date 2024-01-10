import * as Yup from 'yup';

export const validationSchema = Yup.object({
  country_name: Yup.string().required('Please select country name'),
  subtitle: Yup.string().required('Subtitle is required'),
  logo: Yup.mixed()
    .transform((v) => (!v ? undefined : v))
    .required('Please upload Logo of NCC')
});

export const editValidationSchema = Yup.object({
  country_name: Yup.string().required('Please select country name')
});
