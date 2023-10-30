import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  price: yup.number().integer().required(),
  quantity: yup.number().integer().required(),
  event_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
