import Joi from 'joi';

export const eventSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().allow(''),
  price: Joi.number().required(),
});
