const Joi = require("joi");

/**
 * Add City Validation
 */
exports.addCity = Joi.object({
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


/**
 * Get All City Validation
 * No body required
 */
exports.getAllCity = Joi.object({}).unknown(false);