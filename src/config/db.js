const {Sequelize}= require('sequelize');
const dbconfig = require('./config.json')['development']
const sequelize  = new Sequelize(dbconfig)
module.exports = sequelize;