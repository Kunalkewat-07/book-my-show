const Joi = require("joi");

// ------------------ CREATE MOVIE ------------------
const createMovieSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required()
    .messages({
      "string.empty": "Title is required",
      "string.min": "Title must be at least 2 characters"
    }),

  language: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required()
    .messages({
      "string.empty": "Language is required",
      "string.min": "Language must be at least 2 characters"
    }),

  name: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 2 characters"
    }),

  genre: Joi.string()
    .trim()
    .min(2)
    .max(255)
    .required()
    .messages({
      "string.empty": "Genre is required",
      "string.min": "Genre must be at least 2 characters"
    }),

  duration_time: Joi.number()
    .integer()
    .min(1)
    .required()
    .messages({
      "number.base": "Duration must be a number",
      "number.min": "Duration must be at least 1 minute",
      "any.required": "Duration is required"
    }),

  release_date: Joi.date()
    .less("now")
    .required()
    .messages({
      "date.base": "Release date must be a valid date",
      "date.less": "Release date must be in the past",
      "any.required": "Release date is required"
    }),

  description: Joi.string()
    .trim()
    .max(1000)
    .optional()
});

// ------------------ UPDATE MOVIE ------------------
const updateMovieSchema = Joi.object({
  title: Joi.string().trim().min(2).max(255).optional(),
  language: Joi.string().trim().min(2).max(255).optional(),
  name: Joi.string().trim().min(2).max(255).optional(),
  genre: Joi.string().trim().min(2).max(255).optional(),
  duration_time: Joi.number().integer().min(1).optional(),
  release_date: Joi.date().less("now").optional(),
  description: Joi.string().trim().max(1000).optional()
});

// ------------------ PARAMS VALIDATION ------------------
const movieIdParamSchema = Joi.object({
  mid: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Movie ID must be a number",
      "number.positive": "Movie ID must be positive",
      "any.required": "Movie ID is required"
    })
});

// ------------------ QUERY VALIDATION (pagination) ------------------
const getAllMoviesQuerySchema = Joi.object({
  pageno: Joi.number().integer().min(1).optional().default(1),
  limit: Joi.number().integer().min(1).max(100).optional().default(10)
});

module.exports = {
  createMovieSchema,
  updateMovieSchema,
  movieIdParamSchema,
  getAllMoviesQuerySchema
};