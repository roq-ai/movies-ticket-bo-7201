import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  content: yup.string().required(),
  rating: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  movie_id: yup.string().nullable().required(),
});
