const Joi = require("joi");

/**
 * Add Movie Into Theater
 */
exports.addMovieIntoTheaterSchema = Joi.object({
  movie_id: Joi.number()
    .integer()
    .positive()
    .required(),

  theater_id: Joi.number()
    .integer()
    .positive()
    .required(),

  screen_id: Joi.number()
    .integer()
    .positive()
    .optional(),

  price: Joi.number()
    .min(0)
    .optional(),

  start_time: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .optional(),
}).unknown(false);


/**
 * Update Movie Into Theater
 */
exports.updateMovieIntoTheaterScehma = Joi.object({
  MT_id: Joi.number()
    .integer()
    .positive()
    .required(),

  movie_id: Joi.number()
    .integer()
    .positive()
    .required(),

  theater_id: Joi.number()
    .integer()
    .positive()
    .required(),

  screen_id: Joi.number()
    .integer()
    .positive()
    .optional(),

  price: Joi.number()
    .min(0)
    .optional(),

  start_time: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .optional(),
}).unknown(false);


/**
 * Delete Movie Into Theater
 */
exports.deleteMovieIntoTheater = Joi.object({
  MT_id: Joi.number()
    .integer()
    .positive()
    .required(),
}).unknown(false);


/**
 * Get Movies Of Theater
 * No body required
 */
exports.getMoviesOfTheater = Joi.object({}).unknown(false);