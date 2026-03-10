const Joi = require('joi')

exports.createFeedbackSchema = Joi.object({
  movie_id: Joi.number()
    .integer()
    .required()
    .messages({
      "number.base": "movie_id must be a number",
      "any.required": "movie_id is required"
    }),

  rating: Joi.number()
    .integer()
    .min(1)
    .max(5)
    .required()
    .messages({
      "number.base": "rating must be a number",
      "number.min": "rating must be at least 1",
      "number.max": "rating cannot be more than 5"
    }),

  comment: Joi.string()
    .min(3)
    .max(500)
    .required()
});


exports.updateFeedbackSchema = Joi.object({
  movie_id: Joi.number()
    .integer()
    .optional(),
  rating: Joi.number()
    .integer()
    .min(1)
    .max(5)
    .optional(),

  comment: Joi.string()
    .min(3)
    .max(500)
    .optional()
});

exports.FeedbackIDParamsSchema = Joi.object({
  fid: Joi.number()
    .integer()
    .required()
    .messages({
      "number.base": "fid must be a number",
      "any.required": "feedback id is required"
    })
});