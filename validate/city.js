const Joi = require("joi");


exports.addCitySchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required(),

  state: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required(),

  country: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required(),
}).unknown(false);



exports.getAllCity = Joi.object({}).unknown(false);