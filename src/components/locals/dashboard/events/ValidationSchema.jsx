import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string().required('Please enter event title'),
  location: Yup.string().required('Please enter event location'),
  venue: Yup.string().required('Please enter event venue'),
  map_url: Yup.string().required('Please enter map url of event location'),
  event_date: Yup.string().required('Please enter event date'),
  event_time: Yup.string().required('Please enter event time'),
  // description: Yup.mixed().required('Please write a description'),
  contact_email: Yup.string().email().required('Please enter email'),
  // country_of_residence: Yup.string().required('Please enter your country of Residence'),
  // city: Yup.string(),
  contact_phone: Yup.string()
    .typeError('It must be a number')
    .required('Phone number is required')
    .min(10)
    .max(10)
});
