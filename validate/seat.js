const Joi = require("joi");

/**
 * Create Seat Validation
 */
exports.createSeatSchema = Joi.object({
  silver: Joi.number()
    .integer()
    .min(0)
    .required(),

  gold: Joi.number()
    .integer()
    .min(0)
    .required(),

  platinum: Joi.number()
    .integer()
    .min(0)
    .required(),

  silver_price: Joi.number()
    .min(0)
    .required(),

  platinum_price: Joi.number()
    .min(0)
    .required(),
});


/**
 * Delete Seat Validation
 * No body data is needed, so just allow empty body
 */


  exports.Seat_IdParamSchema = Joi.object({
    seat_id: Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        "number.base": "Seat ID must be a number",
        "number.positive": "Seat ID must be positive",
        "any.required": "Seat ID is required"
      })
  });
  

  exports.SIdParamSchema = Joi.object({
    screen_id: Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        "number.base": "Screen ID must be a number",
        "number.positive": "Screen ID must be positive",
        "any.required": "Screen ID is required"
      })
  });