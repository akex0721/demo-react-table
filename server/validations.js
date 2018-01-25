var Joi = require('joi');

var categoryBody = {
  name: Joi.string().min(2).required()
};

module.exports = {
  category: {
    body: categoryBody
  },
};
