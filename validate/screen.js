const Joi = require("joi");

// ------------------ CREATE SCREEN ------------------
const createScreenSchema = Joi.object({
  screen_no: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      "number.base": "Screen number must be a number",
      "number.min": "Screen number must be at least 1",
      "any.required": "Screen number is required"
    }),

  total_seats: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      "number.base": "Total seats must be a number",
      "number.min": "Total seats must be at least 1",
      "any.required": "Total seats are required"
    }),

  screen_type: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required()
    .messages({
      "string.empty": "Screen type is required",
      "string.min": "Screen type must be at least 2 characters"
    })
});

// ------------------ UPDATE SCREEN ------------------
const updateScreenSchema = Joi.object({
  screen_no: Joi.number().integer().min(1).optional(),
  total_seats: Joi.number().integer().min(1).optional(),
  screen_type: Joi.string().trim().min(2).max(255).optional()
});

// ------------------ PARAMS VALIDATION ------------------

// theater_id param (for create screen)
const theaterIdParamSchema = Joi.object({
  Tid: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Theater ID must be a number",
      "number.positive": "Theater ID must be positive",
      "any.required": "Theater ID is required"
    })
});

// screen_id param (for update/delete)
const screenIdParamSchema = Joi.object({
  sid: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Screen ID must be a number",
      "number.positive": "Screen ID must be positive",
      "any.required": "Screen ID is required"
    })
});

module.exports = {
  createScreenSchema,
  updateScreenSchema,
  theaterIdParamSchema,
  screenIdParamSchema
};