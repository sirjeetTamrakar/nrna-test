import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Please enter name'),
  email: Yup.string().email().required('Please enter email'),
  country_of_residence: Yup.string().required('Please enter your country of Residence'),
  city: Yup.string(),
  phone: Yup.number()
});
