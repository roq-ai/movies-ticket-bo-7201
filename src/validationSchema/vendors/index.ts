import * as yup from 'yup';

export const vendorValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  name: yup.string().required(),
});
