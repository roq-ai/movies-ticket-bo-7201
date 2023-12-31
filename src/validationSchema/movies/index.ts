import * as yup from 'yup';

export const movieValidationSchema = yup.object().shape({
  title: yup.string().required(),
  genre: yup.string().required(),
  duration: yup.number().integer().required(),
  rating: yup.number().integer().required(),
  release_date: yup.date().required(),
  vendor_id: yup.string().nullable().required(),
});
