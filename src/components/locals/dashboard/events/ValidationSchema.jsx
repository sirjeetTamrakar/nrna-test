import * as Yup from 'yup';

export const validationSchema = Yup.object({
  // name: Yup.string().required('Please enter name'),
  contact_email: Yup.string().email().required('Please enter email'),
  // country_of_residence: Yup.string().required('Please enter your country of Residence'),
  // city: Yup.string(),
  contact_phone: Yup.string()
    .typeError('It must be a number')
    .required('Phone number is required')
    .min(10)
    .max(10)
});
