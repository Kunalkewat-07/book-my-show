const {Sequelize}=require('sequelize')

const config = require('./config').development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false
  }
);
const connectDb =  function connetDb(){
sequelize.authenticate().then(data => console.log("DB Connected"));
}


module.exports = {sequelize,connectDb};    