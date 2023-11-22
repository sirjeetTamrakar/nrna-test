import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Please enter region title'),
  region_image: Yup.mixed()
    .transform((v) => (!v ? undefined : v))
    .nullable()
    .required('Please upload region photo')
});

export const editValidationSchema = Yup.object({
  name: Yup.string().required('Please enter region title')
});
