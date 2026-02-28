
const sequelize = require('../config/db');
const  initModels  = require('./init-models');

const models   = initModels(sequelize);
console.log(models);
module.exports = models;