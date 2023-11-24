import * as Yup from 'yup';

export const validationSchema = Yup.object({
  gallery_image: Yup.mixed()
    .transform((v) => (!v ? undefined : v))
    .nullable()
    .required('Image is required')
});

export const editValidationSchema = Yup.object({
  gallery_image: Yup.mixed()
    .transform((v) => (!v ? undefined : v))
    .nullable()
    .required('Image is required')
});
