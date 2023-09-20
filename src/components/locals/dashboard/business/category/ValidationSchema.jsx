import * as Yup from 'yup';

export const validationSchema = Yup.object({
  subtitle: Yup.string().required('Please enter title')
  // image: Yup.mixed()
  //   .transform((v) => (!v ? undefined : v))
  //   .nullable()
  //   .required('Image is required')
});

export const editValidationSchema = Yup.object({
  subtitle: Yup.string().required('Please enter title')
});
