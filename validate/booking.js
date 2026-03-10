const Joi = require("joi");

/**
 * Booking + Payment
 */
exports.bookingAndPaymentSchema = Joi.object({
  showId: Joi.number()
    .integer()
    .positive()
    .required(),

  seat_id: Joi.number()
    .integer()
    .positive()
    .required(),

  paymentDetails: Joi.object({
    method: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .required(),

    transactionId: Joi.string()
      .trim()
      .min(5)
      .max(100)
      .required(),
  }).required(),
}).unknown(false);


/**
 * Cancel Booking
 * No body required
 */
exports.bookingIdParamsSchema = Joi.object({
  theater_id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Theater ID must be a number",
      "number.positive": "Theater ID must be positive",
      "any.required": "Theater ID is required"
    })
}).unknown(false);
