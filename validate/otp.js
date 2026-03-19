const Joi = require('joi')


const SendotpSchema = Joi.object({
     email: Joi.string()
        .trim()
        .email()
        .required()
        .messages({
          "string.email": "Invalid email format",
          "string.empty": "Email is required"
        }),
})

const verifyOtpSchema = Joi.object({
      otp: Joi.string()
    .length(6)
    .pattern(/^[0-9]+$/).required(),

     email: Joi.string()
        .trim()
        .email()
        .required()
        .messages({
          "string.email": "Invalid email format",
          "string.empty": "Email is required"
        }),
})


module.exports = {SendotpSchema,verifyOtpSchema}