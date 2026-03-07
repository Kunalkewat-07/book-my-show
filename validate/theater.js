const Joi = require("joi");

// ------------------ CREATE THEATER ------------------
const createTheaterSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required()
    .messages({
      "string.empty": "Theater name is required",
      "string.min": "Theater name must be at least 2 characters"
    }),

  address: Joi.string()
    .trim()
    .min(5)
    .max(255)
    .required()
    .messages({
      "string.empty": "Address is required",
      "string.min": "Address must be at least 5 characters"
    }),

  opening_time: Joi.string()
    .pattern(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .required()
    .messages({
      "string.pattern.base": "Opening time must be in HH:MM:SS format",
      "string.empty": "Opening time is required"
    }),

  closing_time: Joi.string()
    .pattern(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .required()
    .messages({
      "string.pattern.base": "Closing time must be in HH:MM:SS format",
      "string.empty": "Closing time is required"
    }),

  holiday: Joi.string()
    .trim()
    .max(255)
    .optional(),

  city_id: Joi.number()
    .integer()
    .positive()
    .optional(),

  status: Joi.string()
    .valid("active", "inactive")
    .default("active")
});

// ------------------ UPDATE THEATER ------------------
const updateTheaterSchema = Joi.object({
  name: Joi.string().trim().min(2).max(255).optional(),
  address: Joi.string().trim().min(5).max(255).optional(),
  opening_time: Joi.string()
    .pattern(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .optional(),
  closing_time: Joi.string()
    .pattern(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .optional(),
  holiday: Joi.string().trim().max(255).optional(),
  city_id: Joi.number().integer().positive().optional(),
  status: Joi.string().valid("active", "inactive").optional()
});

// ------------------ PARAMS VALIDATION ------------------
const theaterIdParamSchema = Joi.object({
  theater_id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Theater ID must be a number",
      "number.positive": "Theater ID must be positive",
      "any.required": "Theater ID is required"
    })
});

// ------------------ QUERY VALIDATION (pagination) ------------------
const getAllTheatersQuerySchema = Joi.object({
  pageno: Joi.number().integer().min(1).optional().default(1),
  limit: Joi.number().integer().min(1).max(100).optional().default(10)
});

module.exports = {
  createTheaterSchema,
  updateTheaterSchema,
  theaterIdParamSchema,
  getAllTheatersQuerySchema
};