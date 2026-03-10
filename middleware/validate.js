module.exports = (schema,property) => {
    return (req, res, next) => {
      console.log("inside validate ....");
      console.log(req.params);
      const { error, value } = schema.validate(req[property], {
        abortEarly: false,
        stripUnknown: true
      });
  
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          errors: error.details.map((err) => err.message)
        });
      }
  
      req['property'] = value;
      next();
    };
  };